"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({ reset }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="max-w-md text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Something went wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The page could not be loaded. Try again or return to the home page.
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button asChild variant="outline">
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
