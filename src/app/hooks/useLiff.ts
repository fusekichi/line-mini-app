import { useState, useEffect } from 'react';
import liff from '@line/liff';

export function useLiff() {
  const [liffObject, setLiffObject] = useState<typeof liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  useEffect(() => {
    // LIFFの初期化
    const liffId = process.env.NEXT_PUBLIC_LIFF_ID;
    if (!liffId) {
      setLiffError('LIFF IDが設定されていません。');
      return;
    }

    console.log('LIFF IDの初期化を開始します');

    liff
      .init({ liffId })
      .then(() => {
        console.log('LIFFの初期化が完了しました');
        setLiffObject(liff);
      })
      .catch((error: Error) => {
        console.error('LIFFの初期化に失敗しました:', error);
        setLiffError(`初期化エラー: ${error.message}`);
      });
  }, []);

  return { liff: liffObject, error: liffError };
}