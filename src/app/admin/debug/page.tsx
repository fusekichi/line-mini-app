"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function DebugPage() {
  const [richMenus, setRichMenus] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tokenStatus, setTokenStatus] = useState<any>(null);

  const fetchRichMenus = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/richmenu/list');
      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else if (data.richmenus) {
        setRichMenus(data.richmenus);
      } else {
        setRichMenus([]);
      }
    } catch (error: any) {
      setError(`エラー: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const checkToken = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/debug/token');
      const data = await response.json();
      setTokenStatus(data);
    } catch (error: any) {
      setError(`エラー: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">LINEデバッグページ</h1>
        <div>
          <Link href="/admin" className="text-blue-500 hover:underline mr-4">
            管理画面に戻る
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">リッチメニュー情報取得</h2>
        <button
          onClick={fetchRichMenus}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          {loading ? '取得中...' : 'LINE APIからリッチメニュー一覧を取得'}
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {richMenus.length > 0 ? (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">リッチメニュー一覧:</h3>
            {richMenus.map((menu, index) => (
              <div key={index} className="mb-4 p-4 border rounded">
                <div className="font-bold">名前: {menu.name}</div>
                <div className="text-sm text-gray-700">リッチメニューID: <span className="font-mono bg-gray-100 p-1">{menu.richMenuId}</span></div>
                <div className="mt-2 text-xs text-gray-500">
                  サイズ: {menu.size.width}x{menu.size.height}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  エリア数: {menu.areas?.length || 0}
                </div>
              </div>
            ))}
          </div>
        ) : !loading && !error && (
          <div className="mt-4 p-3 bg-yellow-100 text-yellow-700 rounded">
            リッチメニューが見つかりませんでした。LINE Official Account Managerでリッチメニューを作成してください。
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">アクセストークン確認</h2>
        <button
            onClick={checkToken}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
            アクセストークンを検証
        </button>
        
        {tokenStatus && (
            <div className="mt-4 p-4 border rounded">
            <div className="font-semibold">検証結果:</div>
            <div className={tokenStatus.success ? "text-green-600" : "text-red-600"}>
                {tokenStatus.success ? "トークンは有効です" : "トークンに問題があります"}
            </div>
            <div className="mt-2 text-sm">
                <div>ステータスコード: {tokenStatus.statusCode}</div>
                <div>トークンプレビュー: {tokenStatus.tokenPreview}</div>
                {tokenStatus.botInfo && (
                <div className="mt-2">
                    <div>Bot名: {tokenStatus.botInfo.displayName}</div>
                    <div>ユーザーID: {tokenStatus.botInfo.userId}</div>
                </div>
                )}
            </div>
            </div>
        )}
        </div>
    </div>
  );
}