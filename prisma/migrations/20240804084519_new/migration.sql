/*
  Warnings:

  - You are about to drop the column `authorId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorEmail` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "authorId",
DROP COLUMN "content",
ADD COLUMN     "authorEmail" TEXT NOT NULL,
ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Influencers" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Influencers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Influencers" ADD CONSTRAINT "Influencers_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
