import Link from "next/link";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/utils/constants";

function Footer() {
  return (
    <footer
      className={
        "px-8 py-16 space-y-3 max-w-screen-xl flex flex-col items-center mx-auto"
      }
    >
      <Link href="/" className={"text-4xl font-semibold"}>
        sizzler
      </Link>
      <form
        className={
          "flex *:rounded-none border border-gray-400 rounded-md mt-12"
        }
      >
        <Input
          placeholder={"subscribe"}
          type={"email"}
          name={"subscribe"}
          className={"border-none"}
        />
        <Button className={"text-sm px-2"}>subscribe</Button>
      </form>
      <div className={"flex items-center gap-x-2 py-3"}>
        <FaInstagram
          className={"w-8 h-8 text-zinc-50 bg-orange-500 rounded-full p-1"}
        />
        <FaFacebookF
          className={"w-8 h-8 text-zinc-50 bg-orange-500 rounded-full p-1"}
        />
        <FaXTwitter
          className={"w-8 h-8 text-zinc-50 bg-orange-500 rounded-full p-1"}
        />
        <FaYoutube
          className={"w-8 h-8 text-zinc-50 bg-orange-500 rounded-full p-1"}
        />
      </div>
      <div className={"flex justify-center gap-x-12 flex-wrap"}>
        {footerLinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className={"text-center block"}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
export { Footer };
