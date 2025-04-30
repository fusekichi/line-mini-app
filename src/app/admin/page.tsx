"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

// 型定義
interface RichMenu {
  id: string;
  name: string;
  richMenuId: string;
  description?: string;
  imageUrl?: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

interface FormData {
  name: string;
  richMenuId: string;
  description: string;
  imageUrl: string;
  isDefault: boolean;
}

export default function AdminPage() {
  const [richMenus, setRichMenus] = useState<RichMenu[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    richMenuId: '',
    description: '',
    imageUrl: '',
    isDefault: false
  });

  // フォーム送信ハンドラ - 型追加
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/richmenu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert('リッチメニューを登録しました');
        setFormData({
          name: '',
          richMenuId: '',
          description: '',
          imageUrl: '',
          isDefault: false
        });
        
        // 最新のリストを取得
        fetchRichMenus();
      } else {
        alert(`エラー: ${data.error || '不明なエラー'}`);
      }
    } catch (error) {
      console.error('送信エラー:', error);
      alert('通信エラーが発生しました');
    }
    
    setLoading(false);
  };

  // リッチメニュー一覧取得
  const fetchRichMenus = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/richmenu');
      const data = await response.json();
      
      if (data.richMenus) {
        setRichMenus(data.richMenus);
      }
    } catch (error) {
      console.error('リッチメニュー取得エラー:', error);
      alert('リッチメニュー情報の取得に失敗しました');
    }
    setLoading(false);
  };

  // 初期ロード時にデータ取得
  useEffect(() => {
    fetchRichMenus();
  }, []);

  // 入力変更ハンドラ - 型追加
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' 
      ? (target as HTMLInputElement).checked 
      : target.value;
    
    setFormData(prev => ({
      ...prev,
      [target.name]: value
    }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">リッチメニュー管理</h1>
        <Link href="/admin/users" className="text-blue-500 hover:underline mr-4">
          ユーザー管理
        </Link>
        <Link href="/" className="text-blue-500 hover:underline">
          ホームに戻る
        </Link>
      </div>
      
      {/* リッチメニュー登録フォーム */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">新規リッチメニュー登録</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1">名前 (管理用)</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            
            <div>
              <label className="block mb-1">リッチメニューID (LINE)</label>
              <input
                type="text"
                name="richMenuId"
                value={formData.richMenuId}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">説明</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              rows={2}
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1">画像URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleChange}
                className="mr-2"
              />
              デフォルトリッチメニューに設定
            </label>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
          >
            {loading ? '処理中...' : '登録する'}
          </button>
        </form>
      </div>
      
      {/* リッチメニュー一覧 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">登録済みリッチメニュー</h2>
        
        {loading ? (
          <p>読み込み中...</p>
        ) : richMenus.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {richMenus.map(menu => (
              <div key={menu.id} className="border rounded p-4">
                <h3 className="font-bold">{menu.name}</h3>
                <p className="text-sm text-gray-600 mb-1">ID: {menu.richMenuId}</p>
                <p className="text-sm mb-2">{menu.description}</p>
                {menu.imageUrl && (
                  <img 
                    src={menu.imageUrl} 
                    alt={menu.name} 
                    className="w-full h-24 object-cover rounded mb-2" 
                  />
                )}
                {menu.isDefault && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    デフォルト
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>登録済みのリッチメニューはありません</p>
        )}
      </div>
    </div>
  );
}