import { useState, useEffect } from 'react';
import { Menu, Search, User, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 select-none px-6 md:px-12',
        isScrolled
          ? 'bg-ivory/85 backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] border-b border-dark/5 py-4'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu */}
        <button className="md:hidden p-2 text-dark">
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
            <div className="w-5 h-[1px] bg-white rotate-45"></div>
            <div className="w-5 h-[1px] bg-white -rotate-45 -mt-[1px]"></div>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-gold">
            أرابيلا
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-dark/80">
          <Link to="/" className="hover:text-gold transition-colors">الرئيسية</Link>
          <a href="#categories" className="hover:text-gold transition-colors">الغرف</a>
          <a href="#bestsellers" className="hover:text-gold transition-colors">الأكثر مبيعاً</a>
          <a href="#why-us" className="hover:text-gold transition-colors">لماذا نحن</a>
          <a href="#showroom" className="hover:text-gold transition-colors">فروعنا</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 text-dark">
          <button className="hover:text-gold transition-colors hidden sm:block">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button className="hover:text-gold transition-colors hidden sm:block">
            <User size={22} strokeWidth={1.5} />
          </button>
          <button className="hover:text-gold transition-colors relative">
            <Heart size={22} strokeWidth={1.5} />
          </button>
          <button className="hover:text-gold transition-colors flex items-center gap-2">
            <div className="relative">
              <ShoppingCart size={22} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-2 bg-gold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                0
              </span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
