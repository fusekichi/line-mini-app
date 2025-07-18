import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// // 各ファイルでPrismaClientを直接初期化
// const prisma = new PrismaClient();

export async function GET() {
  // try {
  //   const users = await prisma.user.findMany({
  //     orderBy: { createdAt: 'desc' },
  //     include: {
  //       userRichMenu: {
  //         include: {
  //           richMenu: true
  //         }
  //       }
  //     }
  //   });
    
  //   return NextResponse.json({ users });
  // } catch (error: any) {
    console.error('ユーザー取得エラー:');
    // return NextResponse.json(
    //   { error: `ユーザー取得に失敗しました: ${error.message}`, users: [] }, 
    //   { status: 500 }
    // );
  // }


  return NextResponse.json(
      { error: `ユーザー取得に失敗しました:`, users: [] }, 
      { status: 500 }
    );
}