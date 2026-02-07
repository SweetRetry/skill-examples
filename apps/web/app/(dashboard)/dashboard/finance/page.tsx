import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { DashboardShell } from "@/components/dashboard-shell";

export default function DashboardFinancePage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Finance
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-zinc-900 border-white/5">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-zinc-400">
              Total Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">$12,234.00</div>
            <p className="text-xs text-muted-foreground mt-2">
              Available for withdrawal
            </p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/5">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-zinc-400">
              Last Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">$3,450.00</div>
            <p className="text-xs text-emerald-500 mt-2">+12% vs previous</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900 border-white/5">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-zinc-400">
              Pending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">$850.00</div>
            <p className="text-xs text-muted-foreground mt-2">
              Est. payout: May 15
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="bg-zinc-900 border-white/5">
          <CardHeader>
            <CardTitle className="text-white">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0"
                >
                  <div>
                    <p className="text-white font-medium">
                      Royalty Payout - April 2024
                    </p>
                    <p className="text-sm text-zinc-500">
                      Spotify, Apple Music, Tidal
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-500 font-bold">+$1,230.50</p>
                    <p className="text-xs text-zinc-500">Apr 15, 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
