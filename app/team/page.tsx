import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import Image from "next/image"
import { Github } from "lucide-react"

const teamMembers = [
  {
    name: "Nihed BenAbdennour",
    role: "Full Stack Developer",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/178591272a314498b133fffb7ce7bede.png-mAYQa2SEYwi2IapkZ8Ng2rvMSgEKSW.jpeg",
    github: "https://github.com/Nihed-Abd",
  },
  {
    name: "Khairidinne hleli",
    role: "Full Stack Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/khairi-mzdGHFRjy46Gs914oCOif3QPHnwoJ9.jpeg",
    github: "https://github.com/khairihleli",
  },
  {
    name: "Haythem Ragged",
    role: "Full Stack Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/haythem-xL6couRVnLFoamvQUkYoeOaAQNftrn.jpeg",
    github: "https://github.com/haythemraggad",
  },
  {
    name: "Fedi Zaghdoudi",
    role: "Full Stack Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fedi-oTbLL8UJoHB6HJhvY1M8UYCSpyY58A.jpeg",
    github: "https://github.com/fadi-zaghdoud",
  },
  {
    name: "Maram Naderi",
    role: "Full Stack Developer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maram-rc8XhMwj1yDM6TqlVLm1Y7gbSJumTQ.jpeg",
    github: "https://github.com/MaramNaderi",
  },
]

export default function Team() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <PageTransition>
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Our Team</h1>
              <p className="text-xl text-gray-400">Meet the talented developers behind StackVision</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-gray-900 p-6 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-square relative mb-4 overflow-hidden rounded-lg bg-gray-800">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </div>
  )
}

