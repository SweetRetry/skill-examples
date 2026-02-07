import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

export interface ReleaseCardProps {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  year: string;
  type: "Album" | "EP" | "Single";
}

export function ReleaseCard({
  id,
  title,
  artist,
  coverUrl,
  year,
  type,
}: ReleaseCardProps) {
  return (
    <div className="group relative flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {/* Placeholder for real image, using a gradient for now if url is empty or fails */}
        <div className="absolute inset-0 bg-neutral-900" />
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-zinc-800 font-mono text-4xl font-bold">
            VOID
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button size="icon" className="h-14 w-14 rounded-full" asChild>
            <Link href={`/releases/${id}`}>
              <Play className="ml-1 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="truncate text-lg font-bold leading-none text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{artist}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
          <span>{year}</span>
          <span>•</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
}
