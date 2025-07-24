import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - you can integrate with emailjs or other service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
          Get In Touch
        </motion.h1>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                Let's start a conversation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, 
                feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
               {[
                { Icon: Mail, label: "Email", value: "remyathisayaa1765@gmail.com", action: () => window.location.href = 'mailto:remyathisayaa1765@gmail.com' },
                { Icon: Phone, label: "Phone", value: "+91 9342440234", action: () => window.location.href = 'tel:+919342440234' },
                { Icon: MapPin, label: "Location", value: "Madurai, Tamil Nadu, India", action: null },
               ].map(({ Icon, label, value, action }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 10 }}
                  onClick={action}
                  className={`flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border/50 hover:bg-card/80 transition-all duration-300 ${action ? 'cursor-pointer' : ''}`}
                >
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="text-foreground font-medium">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Info Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-border/50"
          >
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Ready to Connect?
              </h3>
              <p className="text-muted-foreground">
                Click the email button below to get in touch directly, or use any of the contact methods on the left.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300"
                onClick={() => window.location.href = 'mailto:remyathisayaa1765@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me Directly
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;