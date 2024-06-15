import Link from "next/link";

const Header = () => {
  return (
    <header className={"px-8 py-6 lg:px-12 shadow "}>
      <nav className={"flex items-center justify-between "}>
        <Link href={"/"} className={"text-2xl font-semibold"}>
          sizzler
        </Link>
        <div className={"*:inline space-x-5"}>
          <Link
            href={"/login"}
            className={"hover:underline underline-offset-1"}
          >
            Login
          </Link>
          <Link
            href={"/signup"}
            className={"hover:underline underline-offset-1"}
          >
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { Header };
