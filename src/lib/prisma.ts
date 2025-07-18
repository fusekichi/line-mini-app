import { PrismaClient } from '@prisma/client'

// グローバルな型定義（TypeScript用）
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// PrismaClientのインスタンスを作成
export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// デフォルトエクスポートを追加
export default prisma