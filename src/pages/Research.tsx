import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const presentations = [
  {
    title: "AI-Powered Mock Interview Analyzer",
    subtitle: "Paper Presentation · Sethu Institute of Technology · March 2026",
    description: "Presented a paper on designing an AI-assisted interview analysis system using Gemini API and UiPath automation at a technical symposium.",
  },
  {
    title: "Explainable Artificial Intelligence (XAI)",
    subtitle: "Paper Presentation · 3rd International Conference · Solamalai College of Engineering · April 2025",
    description: "Presented a paper exploring interpretability techniques in AI systems and their practical implications for model transparency.",
  },
];

const Research = () => {
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
          Research & Presentations
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {presentations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-500 border border-border/50"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-primary text-sm mt-1">{item.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Research;
