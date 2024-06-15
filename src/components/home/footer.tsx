import Link from "next/link";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/utils/constants";

function Footer() {
  return (
    <footer className={"px-8 py-12 space-y-3"}>
      <Link href="/" className={"text-2xl font-medium"}>
        sizzler
      </Link>
      <form
        className={"flex *:rounded-none border border-gray-400 rounded-md mt-2"}
      >
        <Input
          placeholder={"subscribe"}
          type={"email"}
          name={"subscribe"}
          className={"border-none"}
        />
        <Button className={"text-sm px-2"}>subscribe</Button>
      </form>
      <div className={"flex items-center gap-x-2"}>
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
      <div className={"flex flex-col items-center gap-x-2"}>
        {footerLinks.map((link) => {
          return (
            <Link key={link.id} href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
export { Footer };
