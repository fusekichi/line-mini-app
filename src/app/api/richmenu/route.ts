import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// リッチメニュー一覧取得
export async function GET() {
  try {
    const richMenus = await prisma.richMenu.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json({ richMenus });
  } catch (error: any) {
    console.error('リッチメニュー取得エラー:', error);
    return NextResponse.json(
      { error: `リッチメニュー取得に失敗しました: ${error.message}` }, 
      { status: 500 }
    );
  }
}

// リッチメニューの登録
export async function POST(request: Request) {
  try {
    const { name, richMenuId, description, imageUrl, isDefault } = await request.json();

    if (!name || !richMenuId) {
      return NextResponse.json({ error: '必須項目が不足しています' }, { status: 400 });
    }

    // デフォルトメニューの場合、他のデフォルトを解除
    if (isDefault) {
      await prisma.richMenu.updateMany({
        where: { isDefault: true },
        data: { isDefault: false }
      });
    }

    const richMenu = await prisma.richMenu.create({
      data: {
        name,
        richMenuId,
        description,
        imageUrl,
        isDefault: isDefault || false
      }
    });

    return NextResponse.json({ success: true, richMenu });
  } catch (error: any) {
    console.error('リッチメニュー作成エラー:', error);
    return NextResponse.json(
      { error: `リッチメニュー作成に失敗しました: ${error.message}` }, 
      { status: 500 }
    );
  }
}