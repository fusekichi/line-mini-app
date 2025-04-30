"use client";
import { useEffect, useState } from 'react';
import { useLiff } from './providers/LiffProvider';

export default function Home() {
  const { liff, isLoggedIn, profile, isLoading, error } = useLiff();
  const [saveStatus, setSaveStatus] = useState<string>('');

  // プロフィール取得時にDBに保存
  useEffect(() => {
    if (isLoggedIn && profile) {
      setSaveStatus('保存中...');
      
      fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lineUserId: profile.userId,
          displayName: profile.displayName,
          pictureUrl: profile.pictureUrl,
          statusMessage: profile.statusMessage,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setSaveStatus('保存完了');
            console.log('ユーザー情報を保存しました');
          } else {
            setSaveStatus('保存エラー');
            console.error('保存エラー:', data.error);
          }
        })
        .catch(err => {
          setSaveStatus('通信エラー');
          console.error('APIエラー:', err);
        });
    }
  }, [isLoggedIn, profile]);

  const handleLogin = () => {
    if (liff) {
      liff.login();
    }
  };

  const handleShareMessage = () => {
    if (liff && liff.isApiAvailable('shareTargetPicker')) {
      liff.shareTargetPicker([
        {
          type: 'text',
          text: 'LINE Miniアプリから送信しました！ぜひ使ってみてください！'
        }
      ])
      .then(result => {
        if (result) {
          console.log('メッセージ共有成功');
        } else {
          console.log('共有がキャンセルされました');
        }
      })
      .catch(error => {
        console.error('共有エラー:', error);
      });
    } else {
      alert('この機能はLINE内でのみ利用できます');
    }
  };

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center">読み込み中...</div>;
  }

  if (error) {
    return <div className="flex min-h-screen items-center justify-center text-red-500">
      エラーが発生しました: {error.message}
    </div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-green-600">LINE Mini App</h1>
      
      {isLoggedIn && profile ? (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-6">
            <img 
              src={profile.pictureUrl} 
              alt="プロフィール画像" 
              className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-green-400"
            />
            <p className="font-bold text-xl">{profile.displayName}さん</p>
            <p className="text-sm text-gray-600">{profile.statusMessage || 'ステータスメッセージはありません'}</p>
            {saveStatus && (
              <p className={`text-xs mt-1 ${saveStatus === '保存完了' ? 'text-green-500' : 'text-gray-500'}`}>
                {saveStatus}
              </p>
            )}
          </div>
          
          <div className="space-y-4 w-full">
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-md transition-colors"
              onClick={handleShareMessage}
            >
              友だちに共有する
            </button>
            
            <button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-md transition-colors"
              onClick={() => liff?.closeWindow()}
            >
              アプリを閉じる
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <p className="mb-4">LINEアカウントでログインしてください</p>
          <button 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors"
            onClick={handleLogin}
          >
            LINEでログイン
          </button>
        </div>
      )}
    </main>
  );
}