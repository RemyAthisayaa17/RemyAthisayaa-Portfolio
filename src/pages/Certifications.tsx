import { motion } from 'framer-motion';
import { Award, ExternalLink, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const certifications = [
  {
    title: "Mastering AI Agents Bootcamp",
    issuer: "Udemy",
    date: "2025",
    description: "Comprehensive bootcamp on building and deploying AI agents, covering advanced techniques in artificial intelligence and automation.",
    certificateImage: "https://drive.google.com/file/d/1CX6IR6SBjtFD6wf0jiRrhmFB8Dd_1115/view?usp=drivesdk",
    type: "certificate"
  },
  {
    title: "Generative AI",
    issuer: "Google",
    date: "2025",
    description: "Professional certification in Generative AI technologies and implementation strategies from Google.",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/926d2022-09b2-42a0-9950-6be88b39ab76/badges/14828792",
    type: "credential"
  },
  {
    title: "Full Stack Development MasterClass",
    issuer: "Novitech R&D Pvt Ltd",
    date: "2025",
    description: "30 Days MasterClass in Full Stack Development covering comprehensive web development skills.",
    certificateImage: "https://drive.google.com/file/d/1G1TjD7Le6GNxX4ZjzfGInFG4ssmQOZ-1/view?usp=drivesdk",
    type: "certificate"
  },
  {
    title: "Building Dynamic Web Apps with React.js",
    issuer: "Mepco Schlenk Engineering College",
    date: "2025",
    description: "Workshop on building dynamic web applications using React.js at Gyan Mitra '25 National Symposium.",
    certificateImage: "https://drive.google.com/file/d/1FoaL9btGq9hEglacTIyYerbCWnrlu1jD/view?usp=drivesdk",
    type: "certificate"
  },
  {
    title: "HTML & CSS Crash Course",
    issuer: "Mindluster",
    date: "2025",
    description: "Intensive crash course covering fundamental and advanced concepts in HTML and CSS for modern web development.",
    certificateImage: "https://drive.google.com/file/d/1P7isyXtID1AukIratrXfJ4olJm6Q3dzk/view?usp=drivesdk",
    type: "certificate"
  }
];

const Certifications = () => {
  const { toast } = useToast();

  const handleViewCertificate = (cert: typeof certifications[0]) => {
    try {
      const url = cert.type === "credential" && cert.credentialUrl 
        ? cert.credentialUrl 
        : cert.certificateImage;
      
      if (!url || url === "#") {
        toast({
          title: "Certificate not available",
          description: "This certificate is currently being processed.",
          variant: "destructive",
        });
        return;
      }

      // Test if URL is accessible before opening
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Error opening certificate:', error);
      toast({
        title: "Error opening certificate",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    }
  };
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
                onClick={() => handleViewCertificate(cert)}
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