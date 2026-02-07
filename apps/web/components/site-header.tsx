import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@workspace/ui/components/button";

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 transition-colors hover:opacity-90"
        >
          <Icons.logo className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tighter text-foreground">
            VOID<span className="text-primary">.</span>REC
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link
            href="/releases"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            RELEASES
          </Link>
          <Link
            href="/artists"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            ARTISTS
          </Link>
          <Link
            href="/events"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            EVENTS
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="hidden md:flex">
            <Link href="/login">ARTIST LOGIN</Link>
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            DEMO DROP
          </Button>
        </div>
      </div>
    </header>
  );
}
