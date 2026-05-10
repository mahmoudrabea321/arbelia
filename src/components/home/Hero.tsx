import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-[calc(100vh-80px)] w-full flex flex-col md:flex-row overflow-hidden bg-ivory">
      {/* Content */}
      <div className="w-full md:w-3/5 px-6 md:p-12 lg:p-20 flex flex-col justify-center relative z-10 order-2 md:order-1 pt-0 md:pt-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-xs font-bold tracking-wide font-body mb-6">
            تشكيلة صيف ٢٠٢٦ الفاخرة
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-dark drop-shadow-sm">
            حوّل بيتك<br/><span className="text-gold italic font-light drop-shadow-sm">لتحفة عصرية</span>
          </h1>
          <p className="text-lg md:text-xl font-body text-dark/60 max-w-lg mb-10 leading-relaxed font-medium">
            أثاث مصمم ليعكس ذوقك الرفيع، يجمع بين البساطة العالمية والروح العربية العريقة.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 font-body">
            <button className="w-full sm:w-auto bg-gold text-white px-8 py-4 rounded-xl font-semibold hover:bg-gold/90 transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg shadow-gold/20">
              تصفح الكتالوج
              <ArrowLeft size={20} className="" />
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-dark/5 text-dark px-8 py-4 rounded-xl font-semibold hover:bg-dark/5 transition-all duration-300 text-lg">
              المزيد عن التصميمات
            </button>
          </div>
        </motion.div>
      </div>

      {/* Visual area */}
      <div className="w-full h-[50vh] md:h-full md:w-2/5 relative order-1 md:order-2 group overflow-hidden">
        <div className="absolute inset-0 bg-beige">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-[1.03]"
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80")', filter: 'contrast(1.05) saturate(0.9)' }}>
          </div>
          <div className="absolute inset-0 bg-dark/10"></div>
          {/* Gradient fade to match background */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ivory to-transparent hidden md:block z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ivory to-transparent md:hidden z-10 pointer-events-none"></div>
        </div>

        {/* Floating Product Tag */}
        <div className="absolute top-1/4 left-8 md:left-1/4 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce font-body z-20">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-ivory rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=100" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-dark/50">الأكثر طلباً</div>
            <div className="text-xs md:text-sm font-bold text-dark">كنبة لونا المخملية</div>
            <div className="text-[10px] md:text-xs text-gold">٢٤,٥٠٠ ج.م</div>
          </div>
        </div>
      </div>
    </section>
  );
}
