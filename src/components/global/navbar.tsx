"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/vercel.svg";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function NavBar() {
  const { theme } = useTheme();

  return (
    <>
      <div className="p-4 shadow ">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-1 ">
            <Image
              className="block dark:hidden"
              src={Logo}
              width={40}
              height={40}
              alt="App Logo"
            />
            <span className="hidden font-bold sm:block ">App</span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
