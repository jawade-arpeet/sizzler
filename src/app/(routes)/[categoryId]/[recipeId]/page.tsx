import { Button } from "@/components/ui/button";
import { FaRegBookmark } from "react-icons/fa";
import prisma from "../../../../../db";
import Image from "next/image";

async function fetchRecipe(recipeId: string) {
  return prisma.recipe.findUnique({
    where: { id: recipeId },
    select: {
      id: true,
      name: true,
      description: true,
      imgSrc: true,
      prepTime: true,
      cookTime: true,
      instructions: {
        select: {
          id: true,
          stepOrder: true,
          instruction: true,
        },
        orderBy: {
          stepOrder: "asc",
        },
      },
      user: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  });
}

async function RecipePage({
  params: { recipeId },
}: {
  params: { recipeId: string };
}) {
  const recipe = await fetchRecipe(recipeId);
  if (!recipe) {
    return <main>RECIPE NOT FOUND</main>;
  } else {
    return (
      <section className={"px-4 py-6 max-w-screen-md mx-auto"}>
        <h1 className={"text-4xl font-semibold"}>{recipe.name}</h1>
        <p className={"text-sm mt-2"}>
          by{"  "}
          <span
            className={"uppercase text-lg"}
          >{`${recipe.user.firstName} ${recipe.user.lastName}`}</span>
        </p>
        <p className={"text-xs"}>JUN 27, 2023</p>
        <p className={"mt-4"}>{recipe.description}</p>
        <Image
          src={recipe.imgSrc}
          alt={recipe.name}
          width={500}
          height={500}
          className={"mx-auto block my-6"}
        />
        <div className={"bg-orange-300 py-3 px-3 mt-6 text-sm"}>
          <p className={"text-lg"}>
            Prep Time: <span>{recipe.prepTime}</span>
          </p>
          <p className={"text-lg"}>
            Cook Time: <span>{recipe.cookTime}</span>
          </p>
        </div>
        <Button
          className={
            "flex items-center gap-x-2 uppercase text-xs font-sans font-semibold mt-4"
          }
        >
          <span>
            <FaRegBookmark />
          </span>
          save to my recipes
        </Button>
        <div className={"mt-6"}>
          <h1 className={"text-3xl font-semibold"}>Instructions</h1>
          <div className={"flex flex-col gap-y-6"}>
            {recipe.instructions.map((instruction) => {
              return (
                <div key={instruction.id}>
                  <h6 className={"text-lg font-semibold"}>
                    Step {instruction.stepOrder}
                  </h6>
                  <p>{instruction.instruction}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default RecipePage;
