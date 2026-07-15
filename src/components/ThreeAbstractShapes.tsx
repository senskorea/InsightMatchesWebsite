
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, shape }: { position: [number, number, number], color: string, shape: 'box' | 'sphere' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'box': return new THREE.BoxGeometry(1, 1, 1);
      case 'sphere': return new THREE.SphereGeometry(0.5, 32, 32);
      case 'torus': return new THREE.TorusGeometry(0.5, 0.2, 16, 100);
      default: return new THREE.BoxGeometry(1, 1, 1);
    }
  }, [shape]);

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshStandardMaterial color={color} transparent={true} opacity={0.7} />
    </mesh>
  );
};

const Scene = () => {
  const shapes = useMemo(() => [
    { position: [-2, 0, 0] as [number, number, number], color: '#73c1a0', shape: 'box' as const },
    { position: [2, 0, 0] as [number, number, number], color: '#9595f2', shape: 'sphere' as const },
    { position: [0, 2, 0] as [number, number, number], color: '#ffc547', shape: 'torus' as const },
    { position: [-1, -1, -1] as [number, number, number], color: '#73c1a0', shape: 'sphere' as const },
    { position: [1, -1, 1] as [number, number, number], color: '#9595f2', shape: 'box' as const },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </>
  );
};

export const ThreeAbstractShapes = () => {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
};
