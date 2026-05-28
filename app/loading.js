import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="w-full max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <Skeleton className="mx-auto h-8 w-40" />
          <Skeleton className="mx-auto h-14 w-full max-w-2xl" />
          <Skeleton className="mx-auto h-6 w-full max-w-xl" />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Skeleton className="h-40 rounded-xl" />
          <Skeleton className="h-40 rounded-xl" />
          <Skeleton className="h-40 rounded-xl" />
        </div>
      </section>
    </main>
  );
}
