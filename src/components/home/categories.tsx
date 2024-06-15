import { foodCategoriesImages } from "@/utils/constants";
import { cn } from "@/utils/utils";

const Categories = () => {
  return (
    <section
      className={
        "px-6 lg:px-12 lg:gap-x-8 py-12 flex gap-x-3 items-center overflow-x-scroll mx-auto no-scrollbar"
      }
    >
      {foodCategoriesImages.map((img) => {
        return (
          <div
            key={img.id}
            style={{ backgroundImage: `url(${img.src})` }}
            className={cn(
              "h-40 w-40 rounded-full flex flex-col items-center justify-center shrink-0 shadow-2xl",
            )}
          >
            <p className={"text-zinc-50"}>{img.label}</p>
          </div>
        );
      })}
    </section>
  );
};

export { Categories };
