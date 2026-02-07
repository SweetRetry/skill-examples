import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden border-b border-white/5 bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-6xl font-black tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[12rem]">
          VOID<span className="text-primary">.</span>REC
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Exploring the depths of electronic sound.
          <br className="hidden sm:block" />
          Techno / Ambient / Experimental.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="min-w-[200px] text-lg font-bold" asChild>
            <Link href="/releases">LATEST RELEASES</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[200px] text-lg font-bold"
            asChild
          >
            <Link href="/artists">OUR ROSTER</Link>
          </Button>
        </div>
      </div>

      {/* Glitch/Noise overlay placeholder */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.03]" />
    </section>
  );
}
