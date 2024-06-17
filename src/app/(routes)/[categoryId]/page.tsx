import prisma from "../../../../db";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

async function fetchCategoryRecipes(id: string) {
  return prisma.recipe.findMany({
    where: { categoryId: id },
    select: {
      id: true,
      name: true,
      category: true,
      categoryId: true,
      imgSrc: true,
    },
  });
}
async function fetchCategory(id: string) {
  return prisma.categories.findUnique({
    where: { id },
    select: {
      name: true,
    },
  });
}
async function RecipeHomePage({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  const recipes = await fetchCategoryRecipes(categoryId);
  const category = await fetchCategory(categoryId);
  return (
    <section className={"px-4 py-6 max-w-screen-md mx-auto"}>
      <h1 className={"font-semibold text-4xl"}>{category.name}</h1>
      <div
        className={
          "mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-6"
        }
      >
        {recipes.map((recipe) => {
          return (
            <Card key={recipe.id} className={"rounded-md p-4"}>
              <CardContent>
                <Image
                  src={`${recipe.imgSrc}`}
                  alt={recipe.name}
                  width={300}
                  height={300}
                />
                <CardFooter className={""}>
                  <h5 className={"uppercase text-sm mt-3"}>
                    {recipe.category.name}
                  </h5>
                  <Link
                    href={`/${recipe.category.id}/${recipe.id}`}
                    className={
                      "text-2xl block hover:underline underline-offset-3 mt-2"
                    }
                  >
                    {recipe.name}
                  </Link>
                </CardFooter>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default RecipeHomePage;
