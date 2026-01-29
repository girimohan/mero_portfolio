import type React from "react"
import "@/app/globals.css"
import "@/app/theme-transitions.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Giri Mohan | ML Engineer & Full Stack Developer",
  description:
    "ML Engineer and Full Stack Developer specializing in AI/ML solutions and modern web applications. Masters in Computer Science student at University of Helsinki.",
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
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
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
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
          forcedTheme={undefined}
        >
          {children}
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
