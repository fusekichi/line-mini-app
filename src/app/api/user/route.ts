import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// ユーザー情報の保存API
export async function POST(request: Request) {
  try {
    const { lineUserId, displayName, pictureUrl, statusMessage } = await request.json();

    if (!lineUserId || !displayName) {
      return NextResponse.json({ error: '必須項目が不足しています' }, { status: 400 });
    }

    // upsert: 存在すれば更新、なければ作成
    const user = await prisma.user.upsert({
      where: { lineUserId },
      update: { displayName, pictureUrl, statusMessage, updatedAt: new Date() },
      create: { lineUserId, displayName, pictureUrl, statusMessage }
    });

    return NextResponse.json({ success: true, user });
  } catch (error: any) {
    console.error('ユーザー保存エラー:', error);
    return NextResponse.json(
      { error: `ユーザー保存に失敗しました: ${error.message}` }, 
      { status: 500 }
    );
  }
}

// ユーザー情報の取得API
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lineUserId = searchParams.get('lineUserId');
    
    if (!lineUserId) {
      return NextResponse.json({ error: 'lineUserIdが必要です' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { lineUserId },
      include: { userRichMenu: { include: { richMenu: true } } }
    });

    if (!user) {
      return NextResponse.json({ error: 'ユーザーが見つかりません' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error: any) {
    console.error('ユーザー取得エラー:', error);
    return NextResponse.json(
      { error: `ユーザー取得に失敗しました: ${error.message}` }, 
      { status: 500 }
    );
  }
}