import { cn } from "@/utils/utils";
import prisma from "../../../db";
import Link from "next/link";

async function fetchCategories() {
  const res = await prisma.categories.findMany();
  console.log(res);
  return res;
}
async function Categories() {
  const categories = await fetchCategories();
  return (
    <section
      className={
        "px-6 lg:px-12 lg:gap-x-8 py-12 flex gap-x-3 items-center overflow-x-scroll mx-auto no-scrollbar"
      }
    >
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            style={{ backgroundImage: `url(${category.imgSrc})` }}
            className={cn(
              "h-40 w-40 rounded-full flex flex-col items-center justify-center shrink-0 shadow-2xl",
            )}
          >
            <Link href={`/${category.id}`} className={"text-zinc-50 text-xl"}>
              {category.name}
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export { Categories };
