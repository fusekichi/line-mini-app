"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [richMenus, setRichMenus] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    richMenuId: '',
    description: '',
    imageUrl: '',
    isDefault: false
  });
  const router = useRouter();

  // リッチメニュー一覧を取得
  useEffect(() => {
    fetch('/api/richmenu')
      .then(res => res.json())
      .then(data => {
        if (data.richMenus) {
          setRichMenus(data.richMenus);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('リッチメニュー取得エラー:', err);
        setLoading(false);
      });
  }, []);

  // フォーム送信
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
        alert('リッチメニューを登録しました！');
        // フォームをリセット
        setFormData({
          name: '',
          richMenuId: '',
          description: '',
          imageUrl: '',
          isDefault: false
        });
        // リスト更新
        setRichMenus(prev => [data.richMenu, ...prev]);
      } else {
        alert(`エラー: ${data.error}`);
      }
    } catch (error) {
      console.error('送信エラー:', error);
      alert('通信エラーが発生しました');
    }
  };

  // 入力変更ハンドラ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">リッチメニュー管理</h1>
      
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
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            登録する
          </button>
        </form>
      </div>
      
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