import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { DashboardShell } from "@/components/dashboard-shell";
import { Icons } from "@/components/icons";

export default function DashboardReleasesPage() {
  const releases = [
    {
      id: "rel_001",
      title: "Neon Genesis",
      status: "Released",
      streams: "1.2M",
      revenue: "$4,500",
    },
    {
      id: "rel_002",
      title: "Acid Rain",
      status: "Scheduled",
      streams: "-",
      revenue: "-",
    },
    {
      id: "rel_003",
      title: "Deep State",
      status: "Draft",
      streams: "-",
      revenue: "-",
    },
  ];

  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Releases
        </h2>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Icons.disc className="mr-2 h-4 w-4" />
          New Release
        </Button>
      </div>

      <div className="grid gap-4">
        {releases.map((release) => (
          <Card
            key={release.id}
            className="bg-zinc-900 border-white/5 flex flex-row items-center p-4"
          >
            <div className="h-16 w-16 bg-zinc-800 rounded-md flex-shrink-0" />
            <div className="ml-4 flex-1">
              <h3 className="font-bold text-white">{release.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    release.status === "Released"
                      ? "bg-primary/20 text-primary"
                      : release.status === "Scheduled"
                        ? "bg-blue-500/20 text-blue-500"
                        : "bg-zinc-700 text-zinc-400"
                  }`}
                >
                  {release.status}
                </span>
              </div>
            </div>
            <div className="text-right px-4">
              <div className="text-sm text-zinc-400">Streams</div>
              <div className="text-white font-medium">{release.streams}</div>
            </div>
            <div className="text-right px-4">
              <div className="text-sm text-zinc-400">Revenue</div>
              <div className="text-white font-medium">{release.revenue}</div>
            </div>
            <Button variant="ghost" size="icon">
              <Icons.settings className="h-4 w-4" />
            </Button>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
