import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingCube } from '../three/FloatingCube';
import { Button } from '@/components/ui/button';
import { Download, Eye, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const HeroSection = () => {
  const navigate = useNavigate();
  return <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="space-y-8 text-center lg:text-left">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Full Stack
                </span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
            </motion.div>

            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">MERN Stack Developer 
crafting smooth, modern apps with a touch of creativity


          </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300" onClick={() => navigate('/projects')}>
                <Eye className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 transition-all duration-300" onClick={() => window.open('https://bit.ly/Remy-resume', '_blank')}>
                <Eye className="w-5 h-5 mr-2" />
                View Resume
              </Button>
              <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/90 shadow-soft hover:shadow-hover transition-all duration-300" onClick={() => navigate('/contact')}>
                <Send className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0.4,
          ease: 'easeOut'
        }} className="h-96 lg:h-[500px] relative flex items-center justify-center">
            <motion.div animate={{
            y: [0, -10, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-4 border-primary/20 shadow-soft">
                <img 
                  src="/lovable-uploads/f53965dd-976f-4a9d-8420-0f9a3f854afb.png" 
                  alt="Remy Athisayaa - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                animate={{
                  scale: [1, 1.05, 1]
                }} 
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-lg opacity-50"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};