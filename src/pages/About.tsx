import { motion } from 'framer-motion';
const About = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -20
  }} transition={{
    duration: 0.6
  }} className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-5xl font-bold text-center mb-16 bg-gradient-text bg-clip-text text-transparent">
          About Me
        </motion.h1>
        
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-lg text-muted-foreground leading-relaxed mb-12">
            <p className="mb-6">Hello! I'm REMY ATHISAYAA, a passionate Full Stack Developer with a love for creating beautiful, functional web applications. My journey in tech started with curiosity and has evolved into a career dedicated to crafting exceptional digital experiences that merge design with functionality.</p>
            <p className="mb-6">I specialize in modern web technologies including React for frontend development and Python with Django for backend solutions. With a keen eye for UI/UX design and expertise in prompt engineering and AI tools, I create intelligent, user-centered applications. I believe in writing clean, maintainable code and staying at the forefront of emerging technologies and best practices.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>;
};
export default About;