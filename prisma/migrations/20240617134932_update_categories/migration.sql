/*
  Warnings:

  - Made the column `imgSrc` on table `Categories` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Categories" ALTER COLUMN "imgSrc" SET NOT NULL;
