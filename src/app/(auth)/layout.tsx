import Link from "next/link";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={"flex h-screen *:h-full"}>
      <section
        className={
          "hidden lg:basis-1/2 bg-orange-500 h-full px-8 py-6 lg:flex flex-col items-center justify-between"
        }
      >
        <Link href="/" className={"text-2xl text-gray-100 font-medium mr-auto"}>
          sizzler
        </Link>
        <div>
          <h4 className={"text-zinc-50 text-lg leading-[1.2]"}>
            Finally conquered the Sizzler shrimp scampi at home thanks to this
            website! Delicious and way easier than I thought. 5 stars!
          </h4>
          <p className={"text-zinc-50 mt-1 text-lg font-medium"}>Lisa Ann</p>
        </div>
      </section>
      {children}
    </main>
  );
}

export default AuthLayout;
