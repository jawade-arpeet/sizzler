import { Categories } from "@/components/home/categories";
import { Footer } from "@/components/home/footer";
import { Popular } from "@/components/home/popular";

export default function Homepage() {
  return (
    <main>
      <Categories />
      <Popular />
      <Footer />
    </main>
  );
}
