import { HeroSection } from "@/components/hero-section";
import { ReleaseCard } from "@/components/release-card";

export default function Page() {
  const recentReleases = [
    {
      id: "rel_001",
      title: "Neon Genesis",
      artist: "Cyber Void",
      year: "2024",
      type: "EP" as const,
      coverUrl:
        "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "rel_002",
      title: "Acid Rain",
      artist: "Techno Mancer",
      year: "2024",
      type: "Single" as const,
      coverUrl:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2894&auto=format&fit=crop",
    },
    {
      id: "rel_003",
      title: "Deep State",
      artist: "Sub Level",
      year: "2023",
      type: "Album" as const,
      coverUrl:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container mx-auto py-20 px-4">
        <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            LATEST RELEASES
          </h2>
          <a
            href="/releases"
            className="text-sm font-medium text-primary hover:underline"
          >
            VIEW ALL
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentReleases.map((release) => (
            <ReleaseCard key={release.id} {...release} />
          ))}
        </div>
      </section>
    </div>
  );
}
