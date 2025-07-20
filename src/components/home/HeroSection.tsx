import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingCube } from '../three/FloatingCube';
import { Button } from '@/components/ui/button';
import { Download, Eye, Send } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Full Stack
                </span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0"
            >
              Crafting beautiful, scalable web applications with modern technologies. 
              Passionate about creating seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="h-96 lg:h-[500px] relative"
          >
            <Canvas className="w-full h-full">
              <PerspectiveCamera makeDefault position={[0, 0, 6]} />
              <OrbitControls enableZoom={false} enablePan={false} />
              
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#E0F6FF" />
              
              <Suspense fallback={null}>
                <FloatingCube />
                <Environment preset="dawn" />
              </Suspense>
            </Canvas>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-20 blur-3xl animate-glow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};