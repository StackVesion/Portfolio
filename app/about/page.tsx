import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Brain, Code, Users, Rocket } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About StackVision</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a team of passionate full-stack developers from ESPRIT, dedicated to creating innovative solutions
              in HR management and recruitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-400 mb-6">
                At StackVision, we envision a future where HR processes are streamlined, efficient, and powered by
                cutting-edge technology. Our team combines academic excellence with practical development skills to
                create solutions that make a difference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <Brain className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-bold mb-2">Innovation</h3>
                  <p className="text-sm text-gray-400">Pushing boundaries with AI</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <Code className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-bold mb-2">Technology</h3>
                  <p className="text-sm text-gray-400">Modern tech stack</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg" alt="Team at work" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="p-6 bg-gray-900 rounded-lg text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">5 Members</h3>
              <p className="text-gray-400">Dedicated developers</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg text-center">
              <Code className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Full Stack</h3>
              <p className="text-gray-400">Complete solutions</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg text-center">
              <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Powered</h3>
              <p className="text-gray-400">Smart features</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg text-center">
              <Rocket className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovative</h3>
              <p className="text-gray-400">Future-ready</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              As students at ESPRIT, we're combining our academic knowledge with practical development experience to
              create solutions that address real-world challenges in HR and recruitment.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

