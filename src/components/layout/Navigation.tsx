import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-text bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'text-foreground hover:bg-primary/20'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg bg-primary/20"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <div className="w-4 h-0.5 bg-foreground rounded"></div>
              <div className="w-4 h-0.5 bg-foreground rounded"></div>
              <div className="w-4 h-0.5 bg-foreground rounded"></div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};