"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@workspace/ui/components/button"
import { GameCard } from "@/components/game-card"
import {
  expressiveSpring,
  expressiveStagger,
  fadeUpChild,
} from "@/lib/motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const FEATURED_GAMES = [
  {
    title: "Neon Abyss Protocol",
    description:
      "深入赛博城市的地下废墟，在程序生成的迷宫中对抗数字幽灵。Roguelike 横版动作。",
    genre: "Roguelike",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    title: "Phantom Signal",
    description:
      "一款太空探索解谜游戏。追踪来自深空的神秘信号，揭开宇宙中被遗忘的真相。",
    genre: "Puzzle / Exploration",
    image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&q=80",
  },
  {
    title: "Ghost Grid",
    description:
      "在无尽的数据网格中建造、防御、扩张。策略经营与塔防的混合体验。",
    genre: "Strategy",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
] as const

function Spotlight() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 120, damping: 30 })
  const springY = useSpring(y, { stiffness: 120, damping: 30 })

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-10"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - rect.left)
        y.set(e.clientY - rect.top)
      }}
    >
      <motion.div
        className="absolute h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: springX,
          top: springY,
          background:
            "radial-gradient(circle, oklch(0.72 0.15 290 / 0.08) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  )
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden bg-background">
      {/* Ambient gradient — purple glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[600px] w-[600px] animate-pulse rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/6 h-[400px] w-[400px] animate-pulse rounded-full bg-primary/3 blur-[100px] [animation-delay:2s]" />
      </div>

      {/* Ghost shape — abstract decorative element */}
      <div className="pointer-events-none absolute bottom-16 right-8 md:right-16 h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full bg-gradient-to-br from-primary/8 via-primary/3 to-transparent blur-[60px]" />

      <Spotlight />

      {/* Kinetic Typography — left-aligned, asymmetric */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
        className="relative z-20 pl-6 md:pl-16 lg:pl-24"
      >
        {/* Line 1: STUDIO — tighter tracking */}
        <div className="overflow-hidden">
          {"STUDIO".split("").map((char, i) => (
            <motion.span
              key={`s-${i}`}
              variants={{
                hidden: { y: 80, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: expressiveSpring,
                },
              }}
              className="inline-block text-[clamp(3rem,10vw,8rem)] font-bold tracking-[0.15em] leading-[0.9]"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Line 2: PHANTOM — wider tracking for contrast */}
        <div className="overflow-hidden">
          {"PHANTOM".split("").map((char, i) => (
            <motion.span
              key={`p-${i}`}
              variants={{
                hidden: { y: 80, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: expressiveSpring,
                },
              }}
              className="inline-block text-[clamp(3rem,10vw,8rem)] font-bold tracking-[0.3em] leading-[0.9] text-primary"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.p
          variants={fadeUpChild}
          className="mt-6 max-w-sm text-base text-muted-foreground"
        >
          独立游戏工作室 — 在数字世界中创造幽灵般的体验
        </motion.p>

        <motion.div variants={fadeUpChild} className="mt-8 flex gap-4">
          <Button asChild size="lg" className="rounded-lg">
            <Link href="/games">
              探索游戏
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-lg">
            <Link href="/devlog">开发日志</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

function FeaturedSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={expressiveStagger}
      >
        <motion.p
          variants={fadeUpChild}
          className="mb-8 px-6 md:px-16 lg:px-24 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          精选作品
        </motion.p>

        {/* Bento grid — uneven: first card span-2, others small */}
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-4 md:px-4">
          <GameCard
            {...FEATURED_GAMES[0]}
            size="lg"
            className="md:col-span-2 md:row-span-2"
          />
          <GameCard
            {...FEATURED_GAMES[1]}
            className="md:col-span-2"
          />
          <GameCard
            {...FEATURED_GAMES[2]}
            className="md:col-span-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
    </>
  )
}
