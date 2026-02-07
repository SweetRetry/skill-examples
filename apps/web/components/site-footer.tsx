import Link from "next/link";
import { Icons } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold tracking-tighter">VOID.REC</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Independent Electronic Music Label.
            <br />
            Berlin | Tokyo | London
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold tracking-wider text-foreground">
            LABEL
          </h3>
          <Link
            href="/releases"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Releases
          </Link>
          <Link
            href="/artists"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Artists
          </Link>
          <Link
            href="/events"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Events
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold tracking-wider text-foreground">
            LEGAL
          </h3>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Licensing
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold tracking-wider text-foreground">
            CONNECT
          </h3>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            SoundCloud
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Bandcamp
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-12 px-4 text-center text-xs text-muted-foreground/50">
        © 2024 VOID RECORDS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
