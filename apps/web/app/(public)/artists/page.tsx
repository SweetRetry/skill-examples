import Link from "next/link";
import Image from "next/image";

export default function ArtistsPage() {
  const artists = [
    {
      id: "artist_001",
      name: "Cyber Void",
      bio: "Industrial techno from the depths of the net.",
      imageUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "artist_002",
      name: "Techno Mancer",
      bio: "Analog sorcery and acid lines.",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "artist_003",
      name: "Sub Level",
      bio: "Deep hypnotic grooves.",
      imageUrl:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0506?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="container mx-auto min-h-screen py-24 px-4">
      <h1 className="mb-12 text-4xl font-bold tracking-tighter text-white sm:text-6xl">
        ARTIST ROSTER
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist) => (
          <Link
            key={artist.id}
            href={`/artists/${artist.id}`}
            className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors"
          >
            <div className="aspect-[3/4] w-full relative bg-black/50 overflow-hidden">
              {artist.imageUrl ? (
                <Image
                  src={artist.imageUrl}
                  alt={artist.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-mono text-xl font-bold group-hover:text-primary transition-colors">
                  {artist.name}
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {artist.name}
              </h2>
              <p className="mt-2 text-muted-foreground">{artist.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
