"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProfileImageProps {
  size?: "sm" | "md" | "lg" | "xl"
  shape?: "circle" | "hexagon" | "diamond"
  showEffects?: boolean
  animated?: boolean
  className?: string
}

export default function ProfileImage({
  size = "md",
  shape = "circle",
  showEffects = false,
  animated = false,
  className,
}: ProfileImageProps) {
  // Size mapping
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-64 h-64 md:w-80 md:h-80",
  }

  // Shape mapping
  const shapeClasses = {
    circle: "profile-circle",
    hexagon: "profile-hexagon",
    diamond: "profile-diamond",
  }

  const imageComponent = (
    <div
      className={cn(
        "relative overflow-hidden bg-background",
        sizeClasses[size],
        shapeClasses[shape],
        showEffects && "border-2 border-primary",
        className,
      )}
    >
      <Image
        src="/images/profile.png"
        alt="Giri Mohan"
        fill
        className="object-cover"
        sizes={
          size === "xl" ? "(max-width: 768px) 256px, 320px" : size === "lg" ? "128px" : size === "md" ? "96px" : "64px"
        }
        priority
      />
      {showEffects && (
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay" />
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {imageComponent}
        {showEffects && (
          <motion.div
            className="absolute -inset-0.5 rounded-full bg-primary/20 blur-md -z-10"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        )}
      </motion.div>
    )
  }

  return <div className="relative">{imageComponent}</div>
}
