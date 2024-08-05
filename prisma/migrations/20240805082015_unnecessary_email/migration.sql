/*
  Warnings:

  - A unique constraint covering the columns `[authorEmail,title]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "authorEmail" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_authorEmail_title_key" ON "Category"("authorEmail", "title");
