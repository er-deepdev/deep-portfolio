import { Float, RoundedBox, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'motion/react'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

type NodeProps = {
  position: [number, number, number]
  scale?: number
}

function SystemNode({ position, scale = 1 }: NodeProps) {
  return (
    <Float speed={1.25} rotationIntensity={0.35} floatIntensity={0.45}>
      <RoundedBox args={[0.86 * scale, 0.58 * scale, 0.18 * scale]} radius={0.07} position={position}>
        <meshStandardMaterial
          color="#11182f"
          metalness={0.82}
          roughness={0.24}
          emissive="#2b2c83"
          emissiveIntensity={0.22}
        />
      </RoundedBox>
      <mesh position={[position[0], position[1], position[2] + 0.11]}>
        <octahedronGeometry args={[0.12 * scale, 0]} />
        <meshStandardMaterial color="#65e7f7" emissive="#714dff" emissiveIntensity={0.72} />
      </mesh>
    </Float>
  )
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  const assembly = useRef<THREE.Group>(null)
  const rings = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (reducedMotion) return
    if (assembly.current) {
      assembly.current.rotation.y += delta * 0.12
      assembly.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.24) * 0.05
    }
    if (rings.current) rings.current.rotation.z -= delta * 0.07
  })

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={3.2} color="#d9f7ff" />
      <pointLight position={[-4, -2, 2]} intensity={22} color="#5de7f5" distance={8} />
      <pointLight position={[3, 1, -2]} intensity={12} color="#a978ff" distance={7} />

      <group ref={assembly} rotation={[-0.12, 0.35, 0.05]}>
        <mesh>
          <icosahedronGeometry args={[1.05, 4]} />
          <meshPhysicalMaterial
            color="#5b72ff"
            metalness={0.86}
            roughness={0.18}
            clearcoat={0.8}
            clearcoatRoughness={0.22}
            emissive="#281b68"
            emissiveIntensity={0.45}
          />
        </mesh>
        <mesh scale={1.06}>
          <icosahedronGeometry args={[1.05, 2]} />
          <meshBasicMaterial color="#8deeff" wireframe transparent opacity={0.22} />
        </mesh>

        <group ref={rings} rotation={[1.08, 0.16, 0.2]}>
          <mesh>
            <torusGeometry args={[1.72, 0.012, 10, 180]} />
            <meshBasicMaterial color="#72ddff" transparent opacity={0.72} />
          </mesh>
          <mesh rotation={[0.7, 0.35, 0.2]}>
            <torusGeometry args={[2.18, 0.008, 8, 180]} />
            <meshBasicMaterial color="#9b72ff" transparent opacity={0.34} />
          </mesh>
        </group>

        <SystemNode position={[-2.05, 0.9, 0.2]} />
        <SystemNode position={[1.95, 1.05, -0.2]} scale={0.92} />
        <SystemNode position={[1.82, -1.15, 0.35]} scale={0.82} />
        <SystemNode position={[-1.75, -1.25, -0.15]} scale={0.88} />
      </group>

      <Sparkles count={44} scale={6.4} size={1.5} speed={reducedMotion ? 0 : 0.25} color="#8cecff" opacity={0.62} />
    </>
  )
}

function supportsWebGl() {
  if (typeof document === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export function OrbitalSystem() {
  const reducedMotion = useReducedMotion() ?? false
  const canRender = useMemo(() => supportsWebGl(), [])

  return (
    <div className="orbital-system" aria-label="Interactive visualization of a connected software system">
      <div className="orbit-label orbit-label--one">Architecture</div>
      <div className="orbit-label orbit-label--two">Data</div>
      <div className="orbit-label orbit-label--three">Delivery</div>
      <div className="orbit-label orbit-label--four">Impact</div>
      {canRender ? (
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 42 }}
          dpr={[1, 1.6]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <Scene reducedMotion={reducedMotion} />
        </Canvas>
      ) : (
        <div className="orbital-fallback" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )}
    </div>
  )
}
