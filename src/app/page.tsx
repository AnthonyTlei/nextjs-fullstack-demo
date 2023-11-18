import Image from "next/image";
import Logo from "../../public/vercel.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function HomePage() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Image
          className="block dark:hidden"
          src={Logo}
          width={100}
          height={100}
          alt="App Logo"
        />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Demo App
        </span>
      </div>
      <p className="max-w-prose text-center">
        <span className="text-gray-500">
          This is a demo fullstack application built using NextJS, Prisma,
          MongoDB, Clerk, Shadcn-ui and more...
        </span>
      </p>
      <div className="flex flex-row gap-3">
        <Button asChild size="lg">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </div>
    </main>
  );
}
