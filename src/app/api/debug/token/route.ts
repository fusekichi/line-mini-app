// src/app/api/debug/token/route.ts
import { NextResponse } from 'next/server';
import { getLineAccessToken } from '@/lib/line-auth';

export async function GET() {
  try {
    // アクセストークン取得
    const accessToken = await getLineAccessToken();
    
    // トークンが取得できたらプロフィール取得テスト
    const response = await fetch('https://api.line.me/v2/bot/info', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    
    // レスポンスのステータスとボディを取得
    const status = response.status;
    const data = await response.json();
    
    return NextResponse.json({
      success: status === 200,
      statusCode: status,
      tokenWorks: status === 200,
      botInfo: data,
      tokenPreview: accessToken ? `${accessToken.substring(0, 10)}...` : 'トークンなし'
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}