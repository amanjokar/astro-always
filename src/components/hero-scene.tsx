"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Stars } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

const gold = { color: "#d6a43b", metalness: 0.75, roughness: 0.28, emissive: "#4a2f06", emissiveIntensity: 0.7 };
const { lerp } = THREE.MathUtils;

// Rings of the armillary sphere: [radius, tilt x, tilt y, spin speed]
const RINGS: [number, number, number, number][] = [
  [2.5, Math.PI / 2, 0, 0.12],
  [2.15, Math.PI / 2.6, 0.5, -0.18],
  [1.8, 0.4, Math.PI / 3, 0.24],
  [1.45, -0.6, -0.4, -0.3],
];

function Armillary() {
  const root = useRef<THREE.Group>(null!);
  const rings = useRef<THREE.Group[]>([]);
  const zodiac = useRef<THREE.Group>(null!);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const wide = state.size.width >= 1024;
    const scroll = Math.min(scrollY / innerHeight, 1.5);
    const g = root.current;

    // grow in on load, follow the pointer, fly toward the camera on scroll
    const s = lerp(g.scale.x, wide ? 1 : 0.72, 0.04);
    g.scale.setScalar(s);
    g.position.x = lerp(g.position.x, wide ? 2.3 : 0, 0.06);
    g.position.y = lerp(g.position.y, wide ? 0 : -1.5, 0.06);
    g.position.z = lerp(g.position.z, scroll * 3.2, 0.08);
    g.rotation.y = lerp(g.rotation.y, state.pointer.x * 0.6 + scroll * 1.8, 0.05);
    g.rotation.x = lerp(g.rotation.x, -state.pointer.y * 0.4 + scroll * 0.7, 0.05);

    rings.current.forEach((r, i) => (r.rotation.z += dt * RINGS[i][3]));
    zodiac.current.rotation.z = t * 0.05;
  });

  return (
    <group ref={root} scale={0.01}>
      {/* the sun */}
      <mesh>
        <sphereGeometry args={[0.42, 48, 48]} />
        <meshStandardMaterial color="#fff1c4" emissive="#f6b73c" emissiveIntensity={3.2} toneMapped={false} />
      </mesh>
      <pointLight intensity={30} color="#ffcf70" distance={12} />

      {RINGS.map(([r, x, y], i) => (
        <group key={i} rotation={[x, y, 0]}>
          <group ref={(el) => void (el && (rings.current[i] = el))}>
            <mesh>
              <torusGeometry args={[r, 0.028, 16, 200]} />
              <meshStandardMaterial {...gold} />
            </mesh>
            {/* a planet riding each ring */}
            <mesh position={[r, 0, 0]}>
              <sphereGeometry args={[0.09 + i * 0.025, 32, 32]} />
              <meshStandardMaterial color={["#f6d98b", "#c2602f", "#e8e8ee", "#2f4fa8"][i]} emissive={["#f6d98b", "#c2602f", "#e8e8ee", "#2f4fa8"][i]} emissiveIntensity={1.4} toneMapped={false} />
            </mesh>
          </group>
        </group>
      ))}

      {/* outer zodiac band with 12 rashi markers */}
      <group ref={zodiac} rotation={[Math.PI / 2.25, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.95, 0.012, 8, 240]} />
          <meshStandardMaterial {...gold} />
        </mesh>
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 2.95, Math.sin(a) * 2.95, 0]} rotation={[0, 0, a]}>
              <octahedronGeometry args={[0.07]} />
              <meshStandardMaterial color="#f6d98b" emissive="#f6d98b" emissiveIntensity={2} toneMapped={false} />
            </mesh>
          );
        })}
      </group>

      <Sparkles count={70} scale={6.5} size={2.4} speed={0.35} color="#f6d98b" />
    </group>
  );
}

export default function HeroScene() {
  const mobile = typeof matchMedia !== "undefined" && matchMedia("(max-width: 767px)").matches;
  return (
    <Canvas dpr={[1, mobile ? 1.5 : 2]} camera={{ position: [0, 0, 7.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[-4, 5, 3]} intensity={1.6} color="#fff1c4" />
      <Stars radius={60} depth={40} count={mobile ? 1500 : 4000} factor={3.5} fade speed={0.8} />
      <Armillary />
      <EffectComposer multisampling={0}>
        <Bloom mipmapBlur intensity={1.25} luminanceThreshold={0.55} luminanceSmoothing={0.2} />
        <Vignette offset={0.25} darkness={0.75} />
      </EffectComposer>
    </Canvas>
  );
}
