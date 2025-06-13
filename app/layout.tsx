import type React from "react"
import "@/app/globals.css"
import "@/app/theme-transitions.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Giri Mohan | Portfolio",
  description:
    "Professional portfolio showcasing my projects and expertise in machine learning, web development, and data engineering.",
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
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storageTheme === 'dark' || (!storageTheme && systemDark)) {
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
          defaultTheme="system"
          enableSystem={true}
          storageKey="theme"
          forcedTheme={undefined}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
