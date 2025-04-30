import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

export async function POST() {
  return NextResponse.json({ message: "API under maintenance" });
}

// ユーザーへのリッチメニュー割り当て
// export async function POST(request: Request) {
//   try {
//     const { lineUserId, richMenuId } = await request.json();

//     if (!lineUserId || !richMenuId) {
//       return NextResponse.json({ error: '必須項目が不足しています' }, { status: 400 });
//     }

//     // ユーザーの取得または作成
//     const user = await prisma.user.findUnique({
//       where: { lineUserId },
//       include: { userRichMenu: true }
//     });

//     if (!user) {
//       return NextResponse.json({ error: 'ユーザーが見つかりません' }, { status: 404 });
//     }

//     // リッチメニューの取得
//     const richMenu = await prisma.richMenu.findFirst({
//       where: { richMenuId }
//     });

//     if (!richMenu) {
//       return NextResponse.json({ error: 'リッチメニューが見つかりません' }, { status: 404 });
//     }

//     // ユーザーとリッチメニューの関連付け
//     if (user.userRichMenu) {
//       // 既存の関連付けを更新
//       await prisma.userRichMenu.update({
//         where: { userId: user.id },
//         data: { richMenuId: richMenu.id }
//       });
//     } else {
//       // 新規に関連付け
//       await prisma.userRichMenu.create({
//         data: {
//           userId: user.id,
//           richMenuId: richMenu.id
//         }
//       });
//     }

//     return NextResponse.json({ success: true });
//   } catch (error: any) {
//     console.error('リッチメニュー割り当てエラー:', error);
//     return NextResponse.json(
//       { error: `リッチメニュー割り当てに失敗しました: ${error.message}` }, 
//       { status: 500 }
//     );
//   }
// }