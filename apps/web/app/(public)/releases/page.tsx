import { ReleaseCard } from "@/components/release-card";

export default function ReleasesPage() {
  const releases = [
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
    {
      id: "rel_004",
      title: "Void Transmission",
      artist: "System Error",
      year: "2023",
      type: "EP" as const,
      coverUrl:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop",
    },
  ];

  return (
    <div className="container mx-auto min-h-screen py-24 px-4">
      <h1 className="mb-12 text-4xl font-bold tracking-tighter text-white sm:text-6xl">
        DISCOGRAPHY
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {releases.map((release) => (
          <ReleaseCard key={release.id} {...release} />
        ))}
      </div>
    </div>
  );
}
