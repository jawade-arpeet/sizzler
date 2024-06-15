import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from "@/app/actions/action";

function Login() {
  return (
    <section className={"lg:basis-1/2 px-8 py-6"}>
      <Link href={"/signup"} className={"mr-auto"}>
        Sign Up
      </Link>
      <Link href="/" className={"lg:hidden ml-auto"}>
        Sizzler
      </Link>
      <div className={"mt-20"}>
        <h1 className={"text-3xl font-medium text-center tracking-tight"}>
          Login
        </h1>
        <p className={"text-center mt-1"}>Your recipes are waiting</p>
        <p className={"text-center"}>
          Connect to customize your recipe discovery.
        </p>
      </div>
      <form
        action={async (formData) => {
          "use server";
          const res = await login(formData);
          console.log(res);
        }}
         className={"max-w-80 mx-auto flex flex-col items-center gap-y-1 mt-3"}
      >
        <Input placeholder={"Email"} type={"email"} name={"email"} />
        <Input placeholder={"Password"} type={"password"} name={"password"} />
        <p className={"text-gray-400 text-sm"}>
          By connecting, you agree to our Terms of Use and Privacy Notices
        </p>
        <Button type={"submit"} className={"w-full text-sm mt-1"}>
          Login
        </Button>
      </form>
    </section>
  );
}

export default Login;
