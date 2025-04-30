"use client";
import { useLiff } from './providers/LiffProvider';

export default function Home() {
  const { liff, isLoggedIn, profile, isLoading, error } = useLiff();

  const handleLogin = () => {
    if (liff) {
      liff.login();
    }
  };

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center">読み込み中...</div>;
  }

  if (error) {
    return <div className="flex min-h-screen items-center justify-center">エラーが発生しました: {error.message}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-6">LINE Mini App</h1>
      
      {isLoggedIn && profile ? (
        <div className="flex flex-col items-center">
          <div className="text-center mb-6">
            <img 
              src={profile.pictureUrl} 
              alt="プロフィール画像" 
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <p className="font-bold">{profile.displayName}さん</p>
            <p className="text-sm">{profile.statusMessage || 'ステータスメッセージはありません'}</p>
          </div>
          <div className="space-y-4 w-full max-w-md">
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => liff?.sendMessages([{
                type: 'text',
                text: 'ミニアプリからメッセージを送信しました！'
              }])}
            >
              メッセージを送る
            </button>
            <button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => liff?.closeWindow()}
            >
              アプリを閉じる
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4">LINEアカウントでログインしてください</p>
          <button 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleLogin}
          >
            LINEでログイン
          </button>
        </div>
      )}
    </main>
  );
}