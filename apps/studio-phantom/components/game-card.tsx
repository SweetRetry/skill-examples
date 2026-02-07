"use client"

import { motion } from "framer-motion"
import { cn } from "@workspace/ui/lib/utils"
import { expressiveSpring, fadeUpChild } from "@/lib/motion"

export interface GameCardProps {
  title: string
  description: string
  genre: string
  image: string
  size?: "lg" | "default"
  className?: string
}

export function GameCard({
  title,
  description,
  genre,
  image,
  size = "default",
  className,
}: GameCardProps) {
  const isLg = size === "lg"

  return (
    <motion.article
      variants={fadeUpChild}
      whileHover={{ scale: 1.02, transition: expressiveSpring }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-transparent bg-card transition-[border-color] duration-300 hover:border-primary/30",
        className
      )}
    >
      <div
        className={cn(
          "overflow-hidden",
          isLg ? "aspect-[4/5]" : "aspect-[16/10]"
        )}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {isLg ? (
        /* Large card: title overlaid at bottom with heavy gradient */
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/60 to-transparent">
          <div className="p-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">
              {genre}
            </p>
            <h3 className="text-xl font-bold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Frosted overlay on hover */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <div className="p-5">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">
                {genre}
              </p>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          {/* Always-visible title bar */}
          <div className="p-4">
            <h3 className="text-base font-bold tracking-tight">{title}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{genre}</p>
          </div>
        </>
      )}
    </motion.article>
  )
}
