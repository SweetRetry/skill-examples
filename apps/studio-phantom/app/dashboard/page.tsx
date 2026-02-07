"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"
import { swissStagger, swissFadeChild } from "@/lib/motion"
import { TrendingUp, TrendingDown, Users, Gamepad2, Clock, Star } from "lucide-react"

const KPI_DATA = [
  {
    label: "ACTIVE PLAYERS",
    value: "12,847",
    delta: "+14.2%",
    trend: "up" as const,
    icon: Users,
  },
  {
    label: "GAMES PLAYED",
    value: "89,231",
    delta: "+8.7%",
    trend: "up" as const,
    icon: Gamepad2,
  },
  {
    label: "AVG SESSION",
    value: "42m",
    delta: "-3.1%",
    trend: "down" as const,
    icon: Clock,
  },
  {
    label: "AVG RATING",
    value: "4.7",
    delta: "+0.2",
    trend: "up" as const,
    icon: Star,
  },
] as const

const TABLE_DATA = [
  { game: "Neon Abyss Protocol", players: "5,241", revenue: "¥128,400", retention: "68%" },
  { game: "Phantom Signal", players: "3,892", revenue: "¥94,200", retention: "72%" },
  { game: "Ghost Grid", players: "2,104", revenue: "¥51,800", retention: "61%" },
  { game: "Void Walker", players: "1,610", revenue: "¥39,100", retention: "79%" },
] as const

const CHART_DATA = [
  { month: "JAN", value: 65 },
  { month: "FEB", value: 72 },
  { month: "MAR", value: 58 },
  { month: "APR", value: 89 },
  { month: "MAY", value: 95 },
  { month: "JUN", value: 82 },
  { month: "JUL", value: 110 },
  { month: "AUG", value: 98 },
] as const

function BarChart() {
  const maxValue = Math.max(...CHART_DATA.map((d) => d.value))

  return (
    <div className="flex h-full items-end gap-3 pt-4">
      {CHART_DATA.map((d) => {
        const height = (d.value / maxValue) * 100
        return (
          <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
            <span className="font-mono text-xs text-muted-foreground">
              {d.value}
            </span>
            <div
              className="w-full bg-gradient-to-t from-primary/60 to-primary transition-all duration-300 hover:from-primary/80 hover:to-primary"
              style={{ height: `${height}%` }}
            />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {d.month}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default function DashboardPage() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={swissStagger}
      >
        {/* Swiss-style page title with top accent line */}
        <div className="border-t-2 border-primary pt-4">
          <motion.h1
            variants={swissFadeChild}
            className="mb-2 font-mono text-2xl font-bold uppercase tracking-widest"
          >
            Dashboard
          </motion.h1>
          <motion.p
            variants={swissFadeChild}
            className="mb-12 font-mono text-sm text-muted-foreground"
          >
            STUDIO PHANTOM — PLAYER ANALYTICS
          </motion.p>
        </div>

        {/* KPI Cards — Swiss: rounded-none, border, branded color bar */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KPI_DATA.map(({ label, value, delta, trend, icon: Icon }) => (
            <motion.div key={label} variants={swissFadeChild}>
              <Card className="rounded-none border bg-card shadow-none">
                <CardHeader className="pb-2">
                  {/* Top color bar */}
                  <div className="mb-3 h-0.5 w-8 bg-primary" />
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-4xl font-bold tracking-tight">
                    {value}
                  </p>
                  <p
                    className={cn(
                      "mt-1 flex items-center gap-1 font-mono text-xs",
                      trend === "up"
                        ? "text-chart-1"
                        : "text-destructive"
                    )}
                  >
                    {trend === "up" ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {delta}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Data Table — Swiss with branded header */}
        <motion.div variants={swissFadeChild} className="mb-12">
          <div className="overflow-x-auto rounded-none border">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-primary/5">
                  <th className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Game
                  </th>
                  <th className="px-4 py-3 text-right font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Players
                  </th>
                  <th className="px-4 py-3 text-right font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Revenue
                  </th>
                  <th className="px-4 py-3 text-right font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Retention
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_DATA.map((row) => (
                  <tr
                    key={row.game}
                    className="border-b transition-colors hover:bg-muted/20"
                  >
                    <td className="px-4 py-3 text-sm font-medium">
                      {row.game}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-sm text-muted-foreground">
                      {row.players}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-sm text-muted-foreground">
                      {row.revenue}
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-sm text-muted-foreground">
                      {row.retention}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Chart — Swiss with gradient bars */}
        <motion.div variants={swissFadeChild}>
          <Card className="rounded-none border shadow-none">
            <CardHeader>
              <CardTitle className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Monthly Active Players (×1K)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[16/9]">
                <BarChart />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
