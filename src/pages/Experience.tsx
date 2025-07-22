import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Web Development Intern",
    company: "Corizo",
    period: "July - Present",
    description: "Currently working on web development projects, gaining hands-on experience in modern web technologies and collaborative development practices.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
  },
  {
    title: "Full Stack Intern",
    company: "Novitech R&D Private Limited",
    period: "December - January",
    description: "Developed full-stack web applications using modern technologies, gained experience in both frontend and backend development.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express.js"]
  }
];

const Experience = () => {
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
          Work Experience
        </motion.h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-500 border border-border/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm bg-muted/50 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;