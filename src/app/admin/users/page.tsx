"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

// 型定義
interface User {
  id: string;
  lineUserId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
  createdAt: string;
  userRichMenu?: {
    richMenu: {
      id: string;
      name: string;
      richMenuId: string;
    }
  };
}

interface RichMenu {
  id: string;
  name: string;
  richMenuId: string;
  isDefault: boolean;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [richMenus, setRichMenus] = useState<RichMenu[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMenus, setSelectedMenus] = useState<{[key: string]: string}>({});

  // ユーザー一覧の取得
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.users || []);
        
        // 現在のリッチメニュー割り当てを初期値として設定
        const initialSelections: {[key: string]: string} = {};
        data.users.forEach((user: User) => {
          if (user.userRichMenu) {
            initialSelections[user.lineUserId] = user.userRichMenu.richMenu.richMenuId;
          }
        });
        setSelectedMenus(initialSelections);
      } catch (error) {
        console.error('ユーザー取得エラー:', error);
      } finally {
        setLoading(false);
      }
    };

    // リッチメニュー一覧の取得
    const fetchRichMenus = async () => {
      try {
        const response = await fetch('/api/richmenu');
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        setRichMenus(data.richMenus || []);
      } catch (error) {
        console.error('リッチメニュー取得エラー:', error);
      }
    };

    fetchUsers();
    fetchRichMenus();
  }, []);

  // リッチメニュー割り当て処理
  const assignRichMenu = async (lineUserId: string, richMenuId: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/richmenu/assign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lineUserId, richMenuId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'リッチメニュー割り当てに失敗しました');
      }

      // 成功したら選択状態を更新
      setSelectedMenus({
        ...selectedMenus,
        [lineUserId]: richMenuId,
      });
      
      alert('リッチメニューを割り当てました');
    } catch (error) {
      console.error('割り当てエラー:', error);
      alert(`エラー: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  // リッチメニュー選択変更ハンドラ
  const handleMenuChange = (lineUserId: string, richMenuId: string) => {
    if (richMenuId && confirm('このユーザーにリッチメニューを割り当てますか？')) {
      assignRichMenu(lineUserId, richMenuId);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ユーザー管理</h1>
        <div>
          <Link href="/admin" className="text-blue-500 hover:underline mr-4">
            リッチメニュー管理
          </Link>
          <Link href="/" className="text-blue-500 hover:underline">
            ホームに戻る
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">読み込み中...</div>
      ) : users.length === 0 ? (
        <div className="bg-yellow-50 p-4 rounded border border-yellow-200 text-yellow-800">
          ユーザーがまだ登録されていません。LINEミニアプリを使用すると自動的にユーザーが登録されます。
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ユーザー
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ステータス
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  登録日
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  リッチメニュー
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {user.pictureUrl ? (
                        <img 
                          src={user.pictureUrl} 
                          alt={user.displayName} 
                          className="h-10 w-10 rounded-full mr-3"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                          <span className="text-gray-500">{user.displayName.charAt(0)}</span>
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.displayName}</div>
                        <div className="text-xs text-gray-500 truncate max-w-xs">{user.lineUserId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.statusMessage || '未設定'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={selectedMenus[user.lineUserId] || ''}
                      onChange={(e) => handleMenuChange(user.lineUserId, e.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      disabled={loading}
                    >
                      <option value="">デフォルト</option>
                      {richMenus.map((menu) => (
                        <option key={menu.id} value={menu.richMenuId}>
                          {menu.name} {menu.isDefault ? '(デフォルト)' : ''}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}