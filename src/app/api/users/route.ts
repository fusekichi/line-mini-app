import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        userRichMenu: {
          include: {
            richMenu: true
          }
        }
      }
    });
    
    return NextResponse.json({ users });
  } catch (error: any) {
    console.error('ユーザー取得エラー:', error);
    return NextResponse.json(
      { error: `ユーザー取得に失敗しました: ${error.message}`, users: [] }, 
      { status: 500 }
    );
  }
}