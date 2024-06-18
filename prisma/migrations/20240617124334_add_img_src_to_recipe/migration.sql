/*
  Warnings:

  - Made the column `cookTime` on table `Recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prepTime` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "imgSrc" TEXT,
ALTER COLUMN "cookTime" SET NOT NULL,
ALTER COLUMN "prepTime" SET NOT NULL;
