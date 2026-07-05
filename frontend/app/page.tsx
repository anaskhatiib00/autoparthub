import Navbar from "@/components/Navbar"
import Hero from "@/components/home/Hero"
import Features from "@/components/home/Features"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <Features />
    </main>
  )
}