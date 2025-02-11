"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Text, Float } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

function Logo() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[3, 3, 0.3, 5]} />
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
        </mesh>
        <Text
          position={[0, 0, 0.2]}
          fontSize={2}
          color="#ffffff"
          font="/fonts/Geist-Bold.ttf"
          anchorX="center"
          anchorY="middle"
        >
          S
        </Text>
      </group>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Logo />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Environment preset="night" />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white animate-fade-in">StackVision</h1>
        <p className="text-xl md:text-3xl text-gray-300 animate-slide-up">Revolutionizing HR Management</p>
      </div>
    </div>
  )
}

