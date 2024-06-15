import Link from "next/link";

const Header = () => {
  return (
    <header className={"px-8 py-6 shadow "}>
      <nav className={"flex items-center justify-between "}>
        <Link href={"/"}>sizzler</Link>
        <div className={"*:inline space-x-3"}>
          <Link href={"/login"}>Login</Link>
          <Link href={"/signup"}>Sign in</Link>
        </div>
      </nav>
    </header>
  );
};

export { Header };
