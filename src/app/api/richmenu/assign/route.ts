import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getLineAccessToken } from '@/lib/line-auth';

export async function POST(request: Request) {
  try {
    const { lineUserId, richMenuId } = await request.json();

    if (!lineUserId) {
      return NextResponse.json({ error: 'ユーザーIDは必須です' }, { status: 400 });
    }

    // ユーザーの確認
    const user = await prisma.user.findUnique({
      where: { lineUserId },
      include: { userRichMenu: true }
    });

    if (!user) {
      return NextResponse.json({ error: 'ユーザーが見つかりません' }, { status: 404 });
    }

    // リッチメニューIDが指定されていない場合はデフォルトに戻す
    if (!richMenuId) {
      // ユーザー固有のリッチメニュー割り当てがあれば削除
      if (user.userRichMenu) {
        await prisma.userRichMenu.delete({
          where: { userId: user.id }
        });
      }

      // LINE APIでリッチメニュー割り当てを解除
      try {
        const accessToken = await getLineAccessToken();
        const response = await fetch(`https://api.line.me/v2/bot/user/${lineUserId}/richmenu`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        if (!response.ok) {
          console.error('LINE API削除エラー:', await response.text());
        }
      } catch (apiError) {
        console.error('LINE API通信エラー:', apiError);
      }

      return NextResponse.json({ 
        success: true, 
        message: 'ユーザー固有のリッチメニューを解除しました' 
      });
    }

    // リッチメニューの確認
    const richMenu = await prisma.richMenu.findFirst({
      where: { richMenuId }
    });

    if (!richMenu) {
      return NextResponse.json({ error: 'リッチメニューが見つかりません' }, { status: 404 });
    }

    // LINE APIでリッチメニューを割り当て
    try {
      const accessToken = await getLineAccessToken();
      const response = await fetch(`https://api.line.me/v2/bot/user/${lineUserId}/richmenu/${richMenuId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('LINE APIエラー:', errorText);
        return NextResponse.json({ 
          error: `LINE APIエラー: ${errorText}` 
        }, { status: 500 });
      }
    } catch (apiError: any) {
      console.error('LINE API通信エラー:', apiError);
      return NextResponse.json({ 
        error: `LINE API通信エラー: ${apiError.message}` 
      }, { status: 500 });
    }

    // データベースを更新
    if (user.userRichMenu) {
      // 既存の割り当てを更新
      await prisma.userRichMenu.update({
        where: { userId: user.id },
        data: { richMenuId: richMenu.id }
      });
    } else {
      // 新規割り当て
      await prisma.userRichMenu.create({
        data: {
          userId: user.id,
          richMenuId: richMenu.id
        }
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: `ユーザー ${user.displayName} にリッチメニュー ${richMenu.name} を割り当てました` 
    });
  } catch (error: any) {
    console.error('リッチメニュー割り当てエラー:', error);
    return NextResponse.json(
      { error: `リッチメニュー割り当てに失敗しました: ${error.message}` }, 
      { status: 500 }
    );
  }
}