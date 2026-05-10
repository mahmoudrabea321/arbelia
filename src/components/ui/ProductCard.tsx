import { Link } from 'react-router-dom';
import { Heart, MessageCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProductCardProps {
  key?: string;
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
  hoverImage?: string;
  badges?: string[];
  materials?: string[];
}

export default function ProductCard({ id, name, category, price, oldPrice, image, hoverImage, badges, materials }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] mb-5 bg-beige flex-shrink-0 cursor-pointer">
        <Link to={`/product/${id}`} className="absolute inset-0 z-10 block" />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          {badges?.map((badge, idx) => (
            <span key={idx} className="bg-dark/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wider font-body shadow-sm">
              {badge}
            </span>
          ))}
        </div>

        {/* Favorite */}
        <button className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-dark hover:text-gold hover:bg-white transition-all">
          <Heart size={18} strokeWidth={2} />
        </button>

        {/* Image */}
        <img 
          src={image} 
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-700 ease-in-out",
            hoverImage && "group-hover:opacity-0"
          )}
        />
        {hoverImage && (
          <img 
            src={hoverImage} 
            alt={`${name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out scale-105 group-hover:scale-100"
          />
        )}

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
          <button className="w-full bg-[#25D366] text-white rounded-xl py-3.5 font-bold flex items-center justify-center gap-2 hover:bg-[#20BE5C] shadow-lg">
            <MessageCircle size={20} />
            اطلب عبر واتساب
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <span className="text-dark/50 text-xs font-bold tracking-widest uppercase">{category}</span>
          <div className="flex gap-2 text-xs text-dark/60 font-body">
            {materials?.join(' • ')}
          </div>
        </div>
        <Link to={`/product/${id}`} className="font-display font-semibold text-lg text-dark hover:text-gold transition-colors mb-2 line-clamp-2">
          {name}
        </Link>
        <div className="flex items-center gap-3 mt-auto">
          <span className="font-display font-bold text-xl text-dark" dir="rtl">{price} ج.م</span>
          {oldPrice && (
            <span className="font-display text-sm text-dark/40 line-through" dir="rtl">{oldPrice} ج.م</span>
          )}
        </div>
        <div className="mt-3 text-xs text-dark/50 font-body flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gold/50 inline-block" />
          <span>متاح التقسيط مع فاليو وسيمبل</span>
        </div>
      </div>
    </div>
  );
}
