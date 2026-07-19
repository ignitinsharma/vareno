import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Low-poly stylized wolf built from primitives (no external GLB).
 * Rigged parts: head (rotates), tail (sways), ears, body, legs.
 */
function Wolf({ pointer }: { pointer: THREE.Vector2 }) {
  const group = useRef<THREE.Group>(null!);
  const head = useRef<THREE.Group>(null!);
  const tail = useRef<THREE.Group>(null!);
  const chest = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.3) * 0.08 + pointer.x * 0.25;
      group.current.position.y = Math.sin(t * 0.9) * 0.04 - 0.4;
    }
    if (head.current) {
      head.current.rotation.y = pointer.x * 0.6 + Math.sin(t * 0.6) * 0.05;
      head.current.rotation.x = -pointer.y * 0.35 + Math.sin(t * 0.8) * 0.03;
    }
    if (tail.current) {
      tail.current.rotation.z = Math.sin(t * 2.2) * 0.35 + 0.3;
      tail.current.rotation.y = Math.sin(t * 1.7) * 0.2;
    }
    if (chest.current) {
      const s = 1 + Math.sin(t * 1.6) * 0.02;
      chest.current.scale.set(s, s, s);
    }
  });

  const furMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#2a3340"),
        roughness: 0.7,
        metalness: 0.25,
        emissive: new THREE.Color("#0a1a24"),
        emissiveIntensity: 0.4,
      }),
    []
  );
  const eyeMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#00e5ff"),
        emissive: new THREE.Color("#00e5ff"),
        emissiveIntensity: 3,
        toneMapped: false,
      }),
    []
  );
  const noseMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#050505", roughness: 0.4 }),
    []
  );

  return (
    <group ref={group} position={[0, -0.4, 0]} rotation={[0, -0.15, 0]}>
      {/* Body */}
      <mesh ref={chest} material={furMat} position={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[0.55, 1.1, 6, 12]} />
      </mesh>
      {/* Neck */}
      <mesh material={furMat} position={[0.75, 0.35, 0]} rotation={[0, 0, -0.6]}>
        <capsuleGeometry args={[0.32, 0.5, 6, 10]} />
      </mesh>

      {/* Head group */}
      <group ref={head} position={[1.1, 0.75, 0]}>
        <mesh material={furMat}>
          <sphereGeometry args={[0.42, 24, 20]} />
        </mesh>
        {/* Snout */}
        <mesh material={furMat} position={[0.35, -0.08, 0]} rotation={[0, 0, -0.1]}>
          <coneGeometry args={[0.22, 0.55, 14]} />
        </mesh>
        {/* Nose */}
        <mesh material={noseMat} position={[0.62, -0.05, 0]}>
          <sphereGeometry args={[0.07, 12, 10]} />
        </mesh>
        {/* Ears */}
        <mesh material={furMat} position={[-0.1, 0.4, 0.22]} rotation={[0, 0, 0.3]}>
          <coneGeometry args={[0.12, 0.32, 8]} />
        </mesh>
        <mesh material={furMat} position={[-0.1, 0.4, -0.22]} rotation={[0, 0, 0.3]}>
          <coneGeometry args={[0.12, 0.32, 8]} />
        </mesh>
        {/* Eyes */}
        <mesh material={eyeMat} position={[0.3, 0.08, 0.18]}>
          <sphereGeometry args={[0.055, 12, 10]} />
        </mesh>
        <mesh material={eyeMat} position={[0.3, 0.08, -0.18]}>
          <sphereGeometry args={[0.055, 12, 10]} />
        </mesh>
      </group>

      {/* Legs */}
      {[
        [0.45, -0.55, 0.28],
        [0.45, -0.55, -0.28],
        [-0.5, -0.55, 0.28],
        [-0.5, -0.55, -0.28],
      ].map((p, i) => (
        <mesh key={i} material={furMat} position={p as [number, number, number]}>
          <capsuleGeometry args={[0.13, 0.55, 6, 10]} />
        </mesh>
      ))}

      {/* Tail */}
      <group ref={tail} position={[-0.85, 0.15, 0]}>
        <mesh material={furMat} rotation={[0, 0, 0.6]}>
          <capsuleGeometry args={[0.13, 0.9, 6, 10]} />
        </mesh>
      </group>
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null!);
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const n = 400;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  useFrame((s) => {
    if (points.current) points.current.rotation.y = s.clock.elapsedTime * 0.03;
  });
  return (
    <points ref={points} geometry={geo}>
      <pointsMaterial
        size={0.03}
        color="#7fdcff"
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

function Moon() {
  return (
    <mesh position={[-3.5, 2.2, -5]}>
      <circleGeometry args={[1.4, 48]} />
      <meshBasicMaterial color="#a7f0ff" transparent opacity={0.12} />
    </mesh>
  );
}

export function WolfScene() {
  const pointer = useRef(new THREE.Vector2(0, 0));
  return (
    <Canvas
      camera={{ position: [0.5, 0.6, 7.5], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      onPointerMove={(e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        pointer.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      }}
    >
      <color attach="background" args={["#0a0d12"]} />
      <fog attach="fog" args={["#0a0d12", 8, 22]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} color="#cfeeff" />
      <directionalLight position={[-5, 2, -2]} intensity={1.1} color="#00e5ff" />
      <pointLight position={[-3, 2, 3]} intensity={3} color="#00e5ff" distance={12} />
      <pointLight position={[3, -1, 3]} intensity={1.2} color="#ffd28a" distance={10} />
      <Suspense fallback={null}>
        <Moon />
        <Particles />
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
          <Wolf pointer={pointer.current} />
        </Float>
      </Suspense>
    </Canvas>
  );
}
