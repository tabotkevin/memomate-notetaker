import { Github, LogIn } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import type { FC, ReactNode } from "react";
import { cn } from "~/lib/utils";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

export const LandingLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>MemoMate</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <header className="absolute shadow-md z-50 left-0 top-0 flex h-16 w-full items-center justify-between bg-slate-950 px-6 text-white">
          <div className="">
            <h1 className="text-2xl md:text-3xl font-bold">MemoMate</h1>
          </div>
          <Link href={'https://github.com/ZevaGuillo/memomate-notetaker'} target="_blank" rel="noreferrer"
 className="flex cursor-pointer gap-2 text-lg md:text-xl font-semibold hover:text-slate-400">
            <Github />
            <span className="hidden md:inline">Star on </span>GitHub
          </Link>
          <div
            className={cn(
              "group absolute left-1/2 top-full z-10 flex h-16 -translate-x-1/2 transform items-center rounded-b-3xl bg-slate-950 px-6 transition-all ease-in-out hover:bg-slate-800"
            )}
            onClick={() => void signIn()}
          >
            <div className="pointer-events-none absolute -left-[1.15rem] top-0 z-20 h-5 w-5 bg-slate-950 transition-all ease-in-out group-hover:bg-slate-800">
              <div className="absolute right-[.1rem] h-full w-8 rounded-se-3xl bg-slate-50"></div>
            </div>
            <div className="pointer-events-none absolute -right-[1.15rem] top-0 z-20 h-5 w-5 bg-slate-950 pl-[.12rem] transition-all ease-in-out group-hover:bg-slate-800">
              <div className="absolute h-full w-8 rounded-ss-3xl bg-slate-50"></div>
            </div>
            <p className="flex gap-2 text-sm md:text-base">
              <LogIn className="md:hidden"/>
              <span className="hidden font-semibold md:inline">
                Start For Free
              </span>
            </p>
          </div>
        </header>
        <main className="relative h-screen w-screen overflow-x-hidden bg-slate-950 px-3 pt-16">
          {children}
        </main>
      </div>
    </>
  );
};
