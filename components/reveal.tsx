"use client"

import { useEffect, type CSSProperties, type ReactNode } from "react"
import { usePathname } from "next/navigation"

/**
 * Fades content up once when it scrolls into view.
 *
 * Content is fully visible in the server HTML. It's only hidden (via the `js`
 * class set in the layout) when JavaScript is running, so crawlers, no-JS
 * visitors and failed hydration still see everything. Reduced-motion users
 * get no animation (see globals.css).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "li"
}) {
  const style = delay ? ({ transitionDelay: `${delay}s` } as CSSProperties) : undefined
  return (
    <Tag data-reveal="" className={className} style={style}>
      {children}
    </Tag>
  )
}

/** Mounted once in the layout: marks [data-reveal] elements as shown when they enter the viewport. */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])"))
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-shown", ""))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "")
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
