import { motion } from 'framer-motion';
import { HeroSection } from '@/components/home/HeroSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
    </motion.div>
  );
};

export default Home;