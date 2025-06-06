import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8 gap-8">
      <header className="flex flex-col items-center gap-2">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          className="dark:invert"
        />
        <h1 className="text-4xl font-bold mt-2">QuizBox</h1>
        <p className="text-lg text-center max-w-xl mt-2">
          A Jackbox-style multiplayer quiz game scaffold built with Next.js,
          Tailwind CSS, shadcn/ui, Zustand, Socket.IO, Prisma, and NextAuth.js.
        </p>
      </header>
      <section className="flex flex-col items-center gap-4 w-full max-w-md">
        <h2 className="text-2xl font-semibold">Get Started</h2>
        <div className="flex gap-4">
          <Link href="/lobby">
            <Button>Go to Lobby</Button>
          </Link>
          <Link href="/game">
            <Button>Go to Game</Button>
          </Link>
        </div>
        {/* TODO: Add join/create game form here */}
      </section>
      <section className="mt-8 w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300">
          <li>Next.js (TypeScript, App Router)</li>
          <li>Tailwind CSS</li>
          <li>shadcn/ui</li>
          <li>Zustand (state management)</li>
          <li>Socket.IO (real-time)</li>
          <li>Prisma (database)</li>
          <li>NextAuth.js (authentication)</li>
        </ul>
      </section>
      <footer className="mt-12 text-sm text-gray-500 text-center">
        <p>
          Scaffolded by Copilot &mdash;{" "}
          <a
            href="https://github.com/shadcn/ui"
            className="underline hover:text-blue-600"
          >
            shadcn/ui
          </a>{" "}
          &bull;{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-blue-600"
          >
            Next.js
          </a>
        </p>
      </footer>
    </div>
  );
}
