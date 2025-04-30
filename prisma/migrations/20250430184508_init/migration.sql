-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "lineUserId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "pictureUrl" TEXT,
    "statusMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RichMenu" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "richMenuId" TEXT NOT NULL,
    "description" TEXT,
    "imageUrl" TEXT,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RichMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRichMenu" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "richMenuId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRichMenu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_lineUserId_key" ON "User"("lineUserId");

-- CreateIndex
CREATE UNIQUE INDEX "RichMenu_richMenuId_key" ON "RichMenu"("richMenuId");

-- CreateIndex
CREATE UNIQUE INDEX "UserRichMenu_userId_key" ON "UserRichMenu"("userId");

-- AddForeignKey
ALTER TABLE "UserRichMenu" ADD CONSTRAINT "UserRichMenu_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRichMenu" ADD CONSTRAINT "UserRichMenu_richMenuId_fkey" FOREIGN KEY ("richMenuId") REFERENCES "RichMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
