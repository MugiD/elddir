/*
  Warnings:

  - You are about to drop the column `published` on the `Category` table. All the data in the column will be lost.
  - Made the column `authorEmail` on table `Category` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "published",
ALTER COLUMN "authorEmail" SET NOT NULL;
