/*
  Warnings:

  - Added the required column `instruction` to the `RecipeInstructions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RecipeInstructions" ADD COLUMN     "instruction" TEXT NOT NULL;
