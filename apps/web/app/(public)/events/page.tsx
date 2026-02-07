import { Button } from "@workspace/ui/components/button";
import { MapPin } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      id: "evt_001",
      title: "VOID NIGHT: BERLIN",
      date: "2024-04-20",
      venue: "Tresor",
      location: "Berlin, DE",
      lineup: "Cyber Void, Techno Mancer",
    },
    {
      id: "evt_002",
      title: "WAREHOUSE PROJECT",
      date: "2024-05-15",
      venue: "Depot Mayfield",
      location: "Manchester, UK",
      lineup: "Sub Level, System Error",
    },
  ];

  return (
    <div className="container mx-auto min-h-screen py-24 px-4">
      <h1 className="mb-12 text-4xl font-bold tracking-tighter text-white sm:text-6xl">
        UPCOMING EVENTS
      </h1>
      <div className="flex flex-col gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="group flex flex-col gap-6 border border-white/5 bg-black/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex flex-col gap-2 md:flex-row md:gap-8">
              <div className="flex min-w-[100px] flex-col justify-center border-l-2 border-primary pl-4 text-primary">
                <span className="text-3xl font-bold">
                  {new Date(event.date).getDate()}
                </span>
                <span className="text-sm font-medium uppercase tracking-wider">
                  {new Date(event.date).toLocaleString("default", {
                    month: "short",
                  })}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {event.venue}, {event.location}
                </p>
                <div className="text-sm text-zinc-500">
                  <span className="text-zinc-600">Lineup:</span> {event.lineup}
                </div>
              </div>
            </div>
            <Button size="lg" className="shrink-0">
              GET TICKETS
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
