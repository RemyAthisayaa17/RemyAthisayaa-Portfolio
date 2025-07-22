import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative z-10 mt-20 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <h3 className="text-lg font-semibold bg-gradient-text bg-clip-text text-transparent">
              Full Stack Developer
            </h3>
            <p className="text-muted-foreground text-sm">
              Crafting beautiful digital experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {[
              { Icon: Github, href: 'https://github.com/RemyAthisayaa17', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/remy-athisayaa', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:remyathisayaa1765@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors duration-300 group"
              >
                <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 pt-6 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Portfolio. Built with passion and code.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};