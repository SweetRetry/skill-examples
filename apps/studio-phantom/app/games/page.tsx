"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GameCard } from "@/components/game-card"
import { expressiveStagger, fadeUpChild } from "@/lib/motion"

const GAMES = [
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
  {
    title: "Void Walker",
    description:
      "第一人称心理恐怖探索。在虚空之间行走，每一步都可能改变现实的形态。",
    genre: "Horror / Walking Sim",
    image: "https://images.unsplash.com/photo-1534996858221-380b92700493?w=800&q=80",
  },
  {
    title: "Bit Conductor",
    description:
      "音乐节奏驱动的编程游戏。用代码编排音符，让算法成为你的乐器。",
    genre: "Rhythm / Puzzle",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
  },
  {
    title: "Rewrite",
    description:
      "在一个不断重写自身规则的世界中生存。元叙事 Roguelite，每次死亡都会改变游戏本身。",
    genre: "Meta-Roguelite",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
] as const

/** Bento span pattern: first 2 items span-2 (hero), rest span-1 */
function getBentoSpan(index: number) {
  return index < 2 ? "md:col-span-2" : ""
}

export default function GamesPage() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Full-width purple gradient accent bar */}
      <div className="mb-12 h-1 w-full bg-gradient-to-r from-primary via-primary/50 to-transparent" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={expressiveStagger}
      >
        <motion.h1
          variants={fadeUpChild}
          className="mb-2 text-[clamp(2rem,6vw,4rem)] font-bold tracking-tight leading-[1.1]"
        >
          全部游戏
        </motion.h1>
        <motion.p
          variants={fadeUpChild}
          className="mb-16 text-sm text-muted-foreground"
        >
          探索 Studio Phantom 的完整作品集
        </motion.p>

        {/* Bento grid: first 2 span-2, rest span-1 → uneven visual hierarchy */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {GAMES.map((game, i) => (
            <GameCard
              key={game.title}
              {...game}
              size={i < 2 ? "lg" : "default"}
              className={getBentoSpan(i)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
