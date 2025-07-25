import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "UI/UX Design"],
    color: "from-primary to-primary/50"
  },
  {
    title: "Backend", 
    skills: ["Node.js", "Express.js", "MongoDB"],
    color: "from-secondary to-secondary/50"
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Prompt Engineering", "Research"],
    color: "from-accent to-accent/50"
  }
];

const Skills = () => {
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
          Skills & Technologies
        </motion.h1>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50"
            >
              <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-6`}></div>
              
              <h3 className="text-xl font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="px-4 py-3 bg-muted/50 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;