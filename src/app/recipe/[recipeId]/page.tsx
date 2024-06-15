import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaRegBookmark } from "react-icons/fa";

function RecipePage() {
  return (
    <main>
      <header className={"px-8 py-4 shadow"}>
        <Link href={"/"} className={"text-orange-500"}>
          sizzler
        </Link>
      </header>
      <section className={"px-4 py-6 max-w-screen-md mx-auto"}>
        <h1 className={"text-4xl font-semibold"}>Carrot Hot Dogs</h1>
        <p className={"text-sm mt-2"}>
          BY <span className={"uppercase "}>LAUREN MIYASHIRO</span>
        </p>
        <p className={"text-xs"}>JUN 27, 2023</p>
        <div className={"bg-orange-300 py-3 px-3 mt-4 text-sm"}>
          <p>
            Yields: <span>8</span> serving(s)
          </p>
          <p>Prep Time: 30 mins</p>
        </div>
        <Button
          className={
            "flex items-center gap-x-2 uppercase text-xs font-sans font-semibold mt-2"
          }
        >
          <span>
            <FaRegBookmark />
          </span>
          save to my recipes
        </Button>
        <div></div>
      </section>
    </main>
  );
}

export default RecipePage;
