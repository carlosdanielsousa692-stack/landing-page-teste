import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top-btn"
      className="fixed bottom-24 right-7 z-40 w-10 h-10 rounded-full bg-[#172B4D]/90 hover:bg-[#C3A45D] text-white hover:text-[#172B4D] border border-white/20 shadow-lg flex items-center justify-center transition-all duration-300 backdrop-blur-xs focus:outline-none"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
