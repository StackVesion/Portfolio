import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"

const Hero3D = dynamic(() => import("@/components/hero-3d"), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="h-screen">
        <Hero3D />
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            As full stack students at ESPRIT, we're dedicated to revolutionizing HR management through innovative
            technology solutions. Our team combines expertise in AI, web development, and user experience to create
            cutting-edge applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Innovation</h3>
            <p className="text-gray-400">Pushing boundaries with AI-powered solutions and modern technology stack.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Excellence</h3>
            <p className="text-gray-400">Committed to delivering high-quality, scalable solutions.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Collaboration</h3>
            <p className="text-gray-400">Working together to create impactful solutions for real-world problems.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

