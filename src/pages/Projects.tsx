import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and certifications with smooth animations and interactive UI elements.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/lovable-uploads/3f3a4211-1c0d-4c45-a378-50259dcc2279.png",
    liveUrl: "#", // Will be updated after deployment
    githubUrl: "https://github.com/RemyAthisayaa17/RemyAthisayaa-Portfolio",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates and team features for efficient task organization and tracking.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    image: "/lovable-uploads/0863e104-2f08-4786-a129-26a5abc4cab4.png",
    liveUrl: "https://github.com/RemyAthisayaa17/task-manager-app",
    githubUrl: "https://github.com/RemyAthisayaa17/task-manager-app",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-text bg-clip-text text-transparent"
        >
          My Projects
        </motion.h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 border border-border/50"
            >
              <div className="h-48 bg-gradient-mesh overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;