import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Heart, MessageCircle, Ruler, Shield, Truck } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();

  // Mock data for the product
  const product = {
    name: "ركنة كوين المودرن بحرف L باللون الرمادي الفاتح",
    price: "٣٤,٥٠٠",
    oldPrice: "٤٢,٠٠٠",
    desc: "صممت ركنة كوين لتكون القطعة المركزية في غرفة المعيشة، بفضل تنجيدها الفائق النعومة والمقاوم للبقع. الهيكل الداخلي من الخشب الزان المتين مع ميكانيزم متطور لراحة مثالية.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&auto=format&fit=crop&w=1200"
    ]
  };

  return (
    <div className="bg-ivory min-h-screen pt-4 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-dark/50 font-body mb-8">
          <Link to="/" className="hover:text-dark">الرئيسية</Link>
          <ChevronLeft size={14} />
          <Link to="/categories" className="hover:text-dark">غرف المعيشة</Link>
          <ChevronLeft size={14} />
          <span className="text-dark">الركنات</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Images */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-beige">
              <img src={product.images[0]} className="w-full h-full object-cover" alt="Product Main" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.concat([product.images[0], product.images[1]]).map((img, idx) => (
                <div key={idx} className="aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-gold transition-colors">
                  <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="bg-dark/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wider font-body shadow-sm">الأكثر مبيعاً</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-dark">{product.name}</h1>
            
            <div className="flex items-end gap-4 mb-8">
              <span className="font-display font-bold text-4xl text-dark" dir="rtl">{product.price} ج.م</span>
              <span className="font-display text-xl text-dark/40 line-through mb-1" dir="rtl">{product.oldPrice} ج.م</span>
            </div>

            <p className="font-body text-dark/70 text-lg leading-relaxed mb-10">
              {product.desc}
            </p>

            {/* Options */}
            <div className="space-y-8 mb-10">
              <div>
                <h4 className="font-display font-semibold mb-3">اختر لون القماش:</h4>
                <div className="flex gap-3">
                  {['#E0E0E0', '#7A7A7A', '#3C403D', '#D1C8BA', '#2C3E50'].map((color, i) => (
                    <button key={i} className="w-10 h-10 rounded-full border-2 border-white ring-2 ring-transparent focus:ring-gold hover:scale-110 transition-all shadow-sm" style={{ backgroundColor: color }}></button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-display font-semibold mb-3">نوع القماش:</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-2.5 border border-dark bg-dark text-white rounded-xl font-medium text-sm">قطيفة مقاومة للبقع</button>
                  <button className="px-5 py-2.5 border border-beige hover:border-dark rounded-xl font-medium text-sm transition-colors">كتان طبيعي</button>
                  <button className="px-5 py-2.5 border border-beige hover:border-dark rounded-xl font-medium text-sm transition-colors">جلد مقلوب</button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-auto mb-10">
              <button className="flex-1 bg-[#25D366] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#20BE5C] shadow-lg shadow-[#25D366]/20 transition-all text-lg">
                <MessageCircle size={24} />
                طلب ومعاينة عبر واتساب
              </button>
              <button className="w-16 h-[68px] border border-beige bg-white rounded-2xl flex items-center justify-center text-dark hover:text-gold hover:border-gold transition-colors shrink-0 shadow-sm">
                <Heart size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-beige/60">
              <div className="flex flex-col items-center justify-center text-center gap-2">
                <Truck size={24} className="text-gold" />
                <span className="font-bold text-sm">شحن للمنزل</span>
                <span className="text-xs text-dark/50">خلال ٧ أيام عمل</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2">
                <Shield size={24} className="text-gold" />
                <span className="font-bold text-sm">ضمان الجودة</span>
                <span className="text-xs text-dark/50">٣ سنوات استبدال</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2">
                <Ruler size={24} className="text-gold" />
                <span className="font-bold text-sm">رفع المقاسات</span>
                <span className="text-xs text-dark/50">مجاناً عند التعاقد</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
