import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Code2, Users, Shield, Rocket } from "lucide-react"

const sprints = [
  {
    number: 1,
    objectives: "Development of authentication, user management, and AI-powered CV creation",
    duration: "2 weeks",
  },
  {
    number: 2,
    objectives: "Management of applications and job postings",
    duration: "1 week",
  },
  {
    number: 3,
    objectives: "Implementation of ATS and recommendations system",
    duration: "3 weeks",
  },
  {
    number: 4,
    objectives: "Integration of training and certifications",
    duration: "1 week",
  },
  {
    number: 5,
    objectives: "AI-based language assessment and final optimization",
    duration: "1 week",
  },
  {
    number: 6,
    objectives: "Specifications, architecture, backlog, CI/CD",
    duration: "1 week",
  },
]

export default function Project() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <PageTransition>
        <main className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">HR Management & ATS Platform</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A comprehensive solution for modern recruitment and HR management, powered by AI and built with
                cutting-edge technology.
              </p>
            </div>

            {/* Project Timeline */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Project Timeline</h2>
              <div className="grid gap-4">
                {sprints.map((sprint) => (
                  <div
                    key={sprint.number}
                    className="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <span className="inline-block w-12 h-12 rounded-full bg-blue-500 text-white text-xl font-bold flex items-center justify-center">
                          {sprint.number}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold mb-2">Sprint {sprint.number}</h3>
                        <p className="text-gray-400">{sprint.objectives}</p>
                      </div>
                      <div className="flex-shrink-0 text-gray-400">{sprint.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Users className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">AI-Powered ATS</h3>
                      <p className="text-gray-400">Smart candidate filtering and matching system</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Secure Platform</h3>
                      <p className="text-gray-400">GDPR compliant with advanced security measures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Code2 className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Modern Tech Stack</h3>
                      <p className="text-gray-400">Built with React.js, Node.js, and MongoDB</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Rocket className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Scalable Architecture</h3>
                      <p className="text-gray-400">Containerized with Docker and managed with Kubernetes</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Technical Overview</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">Frontend</h3>
                    <p className="text-gray-400">React.js with modern UI components</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Backend</h3>
                    <p className="text-gray-400">Express.js and Node.js REST API</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Database</h3>
                    <p className="text-gray-400">MongoDB for flexible data storage</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">AI/ML</h3>
                    <p className="text-gray-400">Python with TensorFlow for smart features</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Project Timeline</h2>
              <div className="inline-block bg-gray-900 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-gray-800 rounded">
                    <h3 className="font-bold mb-2">Phase 1</h3>
                    <p className="text-gray-400">Architecture & Setup</p>
                  </div>
                  <div className="p-4 border border-gray-800 rounded">
                    <h3 className="font-bold mb-2">Phase 2</h3>
                    <p className="text-gray-400">Core Features</p>
                  </div>
                  <div className="p-4 border border-gray-800 rounded">
                    <h3 className="font-bold mb-2">Phase 3</h3>
                    <p className="text-gray-400">AI Integration</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </main>
      </PageTransition>

      <Footer />
    </div>
  )
}

