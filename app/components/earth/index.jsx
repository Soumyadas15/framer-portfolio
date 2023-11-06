import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion-3d';

export default function Earth() {
    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    });

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/assets/color.jpg',
        '/assets/normal.png',
        '/assets/occlusion.png'
    ]);

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.02} />
            <directionalLight intensity={2.5} position={[1, 0, -0.25]} />
            <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
                {/* Additional shapes on the surface */}
                {[...Array(50)].map((_, index) => (
                    <mesh key={index} position={[Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]}>
                        {/* You can use different geometries here, like boxGeometry or sphereGeometry */}
                        <boxGeometry args={[0.1, 0.1, 0.1]} />
                        <meshStandardMaterial color="red" />
                    </mesh>
                ))}
            </motion.mesh>
        </Canvas>
    );
}
