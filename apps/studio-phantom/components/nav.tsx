"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@workspace/ui/lib/utils"
import { crossZone } from "@/lib/motion"

const links = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/devlog", label: "DevLog" },
] as const

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={crossZone}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-bold tracking-[0.25em] text-foreground uppercase"
        >
          Studio Phantom
        </Link>

        <ul className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href)
            return (
              <li key={href} className="group">
                <Link
                  href={href}
                  className={cn(
                    "relative px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary"
                      transition={crossZone}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-foreground/40 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </motion.header>
  )
}
