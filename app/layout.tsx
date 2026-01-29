import type React from "react"
import "@/app/globals.css"
import "@/app/theme-transitions.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohan Giri | AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in Machine Learning, Agentic AI Systems, and Data Science. Masters in Computer Science (AI & Algorithms) at University of Helsinki.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force the initial theme before hydration to avoid flashing */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storageTheme = localStorage.getItem('theme');
                  if (!storageTheme) {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else if (storageTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {
                  console.error('Error setting initial theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider 
          defaultTheme="light"
          enableSystem={false}
          storageKey="theme"
          forcedTheme={undefined}
        >
          {children}
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
