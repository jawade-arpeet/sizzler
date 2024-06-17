import React from "react";
import { Header } from "@/components/home/header";

function RecipeHomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default RecipeHomePageLayout;
