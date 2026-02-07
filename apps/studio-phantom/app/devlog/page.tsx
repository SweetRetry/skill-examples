"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { expressiveStagger, fadeUpChild, expressiveSpring } from "@/lib/motion"
import { CalendarDays } from "lucide-react"

const ARTICLES = [
  {
    date: "2026-02-05",
    title: "Neon Abyss Protocol — Alpha 0.4 更新日志",
    summary:
      "新增三个Boss关卡，重写了粒子系统以优化低端设备性能，修复了 17 个已知 Bug。",
    tags: ["update", "neon-abyss"],
  },
  {
    date: "2026-01-22",
    title: "Phantom Signal 的音频设计：如何用声音讲故事",
    summary:
      "深入解析我们如何使用程序化音频和环境叙事来构建 Phantom Signal 的沉浸感。",
    tags: ["design", "phantom-signal"],
  },
  {
    date: "2026-01-10",
    title: "Ghost Grid 多人模式：从原型到上线",
    summary:
      "回顾 Ghost Grid 多人联机功能的开发历程，包括网络架构选型、延迟补偿方案和压力测试结果。",
    tags: ["engineering", "ghost-grid"],
  },
  {
    date: "2025-12-28",
    title: "年度总结：2025 年的 Studio Phantom",
    summary:
      "回顾 2025 年的里程碑：3 款游戏进入 Early Access，团队从 4 人扩展到 9 人，社区增长 400%。",
    tags: ["studio", "annual"],
  },
  {
    date: "2025-12-15",
    title: "Void Walker 技术剖析：实时光线追踪在恐怖游戏中的应用",
    summary:
      "探讨我们如何在 WebGPU 上实现轻量级光追效果，并用它创造 Void Walker 的核心恐怖氛围。",
    tags: ["engineering", "void-walker"],
  },
] as const

export default function DevLogPage() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
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
          DevLog
        </motion.h1>
        <motion.p
          variants={fadeUpChild}
          className="mb-16 text-sm text-muted-foreground"
        >
          开发日志、技术文章与工作室动态
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-12">
            {ARTICLES.map((article) => (
              <motion.article
                key={article.title}
                variants={fadeUpChild}
                whileHover={{ x: 4, transition: expressiveSpring }}
                className="group relative pl-10"
              >
                {/* Timeline dot — diamond shape */}
                <div className="absolute left-0 top-2 flex h-[23px] w-[23px] items-center justify-center bg-background">
                  <div className="h-3 w-3 rotate-45 border border-border bg-background transition-colors group-hover:border-primary group-hover:bg-primary" />
                </div>

                {/* Card with left accent on hover */}
                <div className="rounded-lg border-l-2 border-l-transparent border-t border-foreground/10 bg-card/60 p-5 backdrop-blur-sm transition-all group-hover:border-l-primary group-hover:bg-card/80">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3" />
                    <time>{article.date}</time>
                  </div>

                  <h2 className="mb-2 text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {article.summary}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
