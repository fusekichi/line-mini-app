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