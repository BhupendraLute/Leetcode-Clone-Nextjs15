import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="max-w-md text-center space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            404
          </p>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Page not found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The page you are looking for does not exist or has moved.
          </p>
        </div>
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </section>
    </main>
  );
}
