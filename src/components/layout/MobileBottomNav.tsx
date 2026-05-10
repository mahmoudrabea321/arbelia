import { Home, Grid, Heart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function MobileBottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-beige shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40 pb-safe">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={cn("flex flex-col items-center justify-center w-full h-full gap-1", currentPath === '/' ? "text-gold" : "text-dark/60")}>
          <Home size={22} strokeWidth={currentPath === '/' ? 2 : 1.5} />
          <span className="text-[10px] font-medium">الرئيسية</span>
        </Link>
        <Link to="/categories" className={cn("flex flex-col items-center justify-center w-full h-full gap-1", currentPath === '/categories' ? "text-gold" : "text-dark/60")}>
          <Grid size={22} strokeWidth={currentPath === '/categories' ? 2 : 1.5} />
          <span className="text-[10px] font-medium">الأقسام</span>
        </Link>
        <Link to="/wishlist" className={cn("flex flex-col items-center justify-center w-full h-full gap-1", currentPath === '/wishlist' ? "text-gold" : "text-dark/60")}>
          <Heart size={22} strokeWidth={currentPath === '/wishlist' ? 2 : 1.5} />
          <span className="text-[10px] font-medium">المفضلة</span>
        </Link>
        <Link to="/account" className={cn("flex flex-col items-center justify-center w-full h-full gap-1", currentPath === '/account' ? "text-gold" : "text-dark/60")}>
          <User size={22} strokeWidth={currentPath === '/account' ? 2 : 1.5} />
          <span className="text-[10px] font-medium">حسابي</span>
        </Link>
      </div>
    </div>
  );
}
