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
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 残りのコードは変更なし
  return (
    // 既存のJSX部分
  );
}