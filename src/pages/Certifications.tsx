import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: "Full Stack Development MasterClass",
    issuer: "NoviTech R&D Pvt Ltd",
    date: "2025",
    description: "30 Days MasterClass in Full Stack Development covering comprehensive web development skills.",
    certificateImage: "/public/lovable-uploads/85990ff0-5f6d-43f0-bcf1-8f5816edc3e8.png",
    type: "certificate"
  },
  {
    title: "Full Stack Development Internship",
    issuer: "NoviTech R&D Pvt Ltd", 
    date: "2025",
    description: "One month internship in Full Stack Development with hands-on project experience.",
    certificateImage: "/public/lovable-uploads/f503bd5c-958d-488f-be6e-7f4aea4661ba.png",
    type: "certificate"
  },
  {
    title: "Google Gen AI Badge",
    issuer: "Google Cloud",
    date: "2025",
    description: "Professional certification in Generative AI and machine learning technologies.",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/926d2022-09b2-42a0-9950-6be88b39ab76/badges/14828792",
    type: "credential"
  },
  {
    title: "Introduction to MERN Stack",
    issuer: "Simplilearn",
    date: "2025",
    description: "Comprehensive course covering MongoDB, Express.js, React.js, and Node.js development.",
    certificateImage: "/public/lovable-uploads/1ed7820c-cd30-4c65-b2e0-fd6299683326.png",
    type: "certificate"
  },
  {
    title: "Building Dynamic Web Apps with React.js",
    issuer: "Mepco Schlenk Engineering College",
    date: "2025",
    description: "Workshop on building dynamic web applications using React.js at Gyan Mitra '25 National Symposium.",
    certificateImage: "/public/lovable-uploads/793e58aa-17ad-42d3-b5d8-476a3fc5dcea.png",
    type: "certificate"
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
                onClick={() => {
                  if (cert.type === "credential" && cert.credentialUrl) {
                    window.open(cert.credentialUrl, '_blank');
                  } else if (cert.certificateImage) {
                    window.open(cert.certificateImage, '_blank');
                  }
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {cert.type === "credential" ? "View Credential" : "View Certificate"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;