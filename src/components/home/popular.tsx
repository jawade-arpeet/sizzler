import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import prisma from "../../../db";
import Image from "next/image";

async function fetchRecipes() {
  return prisma.recipe.findMany({
    select: {
      id: true,
      name: true,
      imgSrc: true,
      category: true,
    },
  });
}

async function Popular() {
  const recipes = await fetchRecipes();
  return (
    <section className={"px-8 py-6"}>
      <h1 className={"text-4xl font-semibold"}>Popular</h1>
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

export { Popular };
