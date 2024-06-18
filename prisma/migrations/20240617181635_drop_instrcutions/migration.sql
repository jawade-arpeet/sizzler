/*
  Warnings:

  - You are about to drop the column `instructions` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "instructions";

-- CreateTable
CREATE TABLE "RecipeInstructions" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "stepOrder" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "RecipeInstructions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RecipeInstructions" ADD CONSTRAINT "RecipeInstructions_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
