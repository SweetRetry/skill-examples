import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { DashboardShell } from "@/components/dashboard-shell";
import { Icons } from "@/components/icons";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-zinc-900 border-white/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Streams
            </CardTitle>
            <Icons.activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">2.4M</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Revenue (Est.)
            </CardTitle>
            <span className="text-primary font-bold">$</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">$12,234</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Listeners
            </CardTitle>
            <Icons.user className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">573K</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Upcoming Gigs
            </CardTitle>
            <Icons.calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">12</div>
            <p className="text-xs text-muted-foreground">
              Next: Tresor (Apr 20)
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-zinc-900 border-white/5">
          <CardHeader>
            <CardTitle className="text-white">Recent Streams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full flex items-center justify-center border border-dashed border-white/10 rounded-md text-muted-foreground">
              Chart Placeholder
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 bg-zinc-900 border-white/5">
          <CardHeader>
            <CardTitle className="text-white">Top Tracks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  01
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-white">
                    Neon Genesis
                  </p>
                  <p className="text-xs text-muted-foreground">Cyber Void</p>
                </div>
                <div className="ml-auto font-medium text-white">1.2M</div>
              </div>
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-muted-foreground">
                  02
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-white">
                    System Crash
                  </p>
                  <p className="text-xs text-muted-foreground">Cyber Void</p>
                </div>
                <div className="ml-auto font-medium text-white">890K</div>
              </div>
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-muted-foreground">
                  03
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-white">
                    Void Loop
                  </p>
                  <p className="text-xs text-muted-foreground">Cyber Void</p>
                </div>
                <div className="ml-auto font-medium text-white">650K</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
