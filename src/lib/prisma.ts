// import { PrismaClient } from '@prisma/client'

// // PrismaClientインスタンス化関数
// function getPrismaClient() {
//   // ビルド時は空のモックを返す
//   if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
//     console.log('ビルド時はPrismaクライアントをモック化します');
//     // @ts-ignore
//     return {}
//   }
  
//   // 通常の場合はPrismaClientを返す
//   const globalForPrisma = global as unknown as { prisma: PrismaClient }
//   const prisma = globalForPrisma.prisma || new PrismaClient()
  
//   if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
  
//   return prisma
// }

// export default getPrismaClient()



// import { PrismaClient } from '@prisma/client';

// // グローバル変数の型拡張
// declare global {
//   var prisma: PrismaClient | undefined;
// }

// // 開発環境でホットリロード時に複数のPrismaインスタンスが作成されるのを防ぐ
// const prisma = global.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

// export default prisma;




import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma