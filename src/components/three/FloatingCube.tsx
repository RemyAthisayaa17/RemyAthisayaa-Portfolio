import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#E6E6FA"
        transparent
        opacity={0.8}
        metalness={0.1}
        roughness={0.1}
      />
      {/* Inner glow */}
      <mesh scale={0.9}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial 
          color="#E0F6FF"
          transparent
          opacity={0.3}
        />
      </mesh>
    </mesh>
  );
};