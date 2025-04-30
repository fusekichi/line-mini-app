import { NextResponse } from 'next/server';
import { getLineAccessToken } from '@/lib/line-auth';

export async function GET() {
  try {
    const accessToken = await getLineAccessToken();
    const response = await fetch('https://api.line.me/v2/bot/richmenu/list', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ 
        error: `LINE API エラー: ${errorText}` 
      }, { status: response.status });
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ 
      error: `リクエストエラー: ${error.message}` 
    }, { status: 500 });
  }
}