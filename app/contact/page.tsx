import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactSection from "@/components/sections/contact-section"
import { ThemeProvider } from "@/components/theme-provider"

export default function ContactPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen flex-col">
        <Navbar activeSection="contact" />
        <main className="flex-1">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
