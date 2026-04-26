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
            <p className="mb-6">I'm a full-stack developer graduating in June 2026 from Mangayarkarasi College of Engineering (CGPA 8.4), with hands-on experience building web applications and AI-integrated projects.</p>
            <p className="mb-6">I've worked with React, Python, Flask, and Gemini API to build tools like an AI-assisted interview prep platform and a semantic resume-to-job matcher. These projects gave me practical exposure to prompt engineering, NLP APIs, and workflow automation using UiPath.</p>
            <p className="mb-6">I've completed 10 months of internship training at Corizo Edutech (full-stack development and UI/UX) and NoviTech R&D (MERN stack), and I've presented project work at two academic technical conferences.</p>
            <p className="mb-6">Currently transitioning from Software Trainee to Junior Developer, with a strong interest in teams building products with AI components.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>;
};
export default About;