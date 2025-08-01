import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <Navigation />
      <main className="relative z-10 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};