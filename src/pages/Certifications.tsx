import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    description: "Comprehensive certification covering AWS cloud architecture and best practices.",
    credentialUrl: "#"
  },
  {
    title: "React Developer Certification",
    issuer: "Meta (Facebook)",
    date: "2022",
    description: "Advanced React concepts including hooks, context, and performance optimization.",
    credentialUrl: "#"
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2022",
    description: "Cloud computing and infrastructure management on Google Cloud Platform.",
    credentialUrl: "#"
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2021",
    description: "Comprehensive full-stack development covering frontend, backend, and databases.",
    credentialUrl: "#"
  }
];

const Certifications = () => {
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
          Certifications
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-500 border border-border/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-primary text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <span className="text-muted-foreground text-sm bg-muted/50 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {cert.description}
              </p>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary/50 hover:bg-primary/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Credential
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;