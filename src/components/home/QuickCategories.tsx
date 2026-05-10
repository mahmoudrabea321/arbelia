import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const categories = [
  { id: 1, name: "غرف المعيشة", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&auto=format&fit=crop&w=600", items: "١٢٠ منتج" },
  { id: 2, name: "غرف النوم", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&auto=format&fit=crop&w=600", items: "٨٥ منتج" },
  { id: 3, name: "غرف السفرة", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&auto=format&fit=crop&w=600", items: "٦٤ منتج" },
  { id: 4, name: "مكتبات التلفزيون", image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&auto=format&fit=crop&w=600", items: "٤٢ منتج" },
];

export default function QuickCategories() {
  return (
    <section id="categories" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4 tracking-tight">تسوق حسب الغرفة</h2>
            <p className="font-body text-dark/60 text-lg">اختر تصنيف غرفتك واكتشف مجموعة منتقاة من أرقى التصميمات العالمية المصنوعة بأيادي مصرية احترافية.</p>
          </div>
          <button className="flex items-center gap-2 font-display font-bold text-gold hover:text-dark transition-colors shrink-0 group">
            عرض كل الأقسام
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-[420px] rounded-[32px] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-500 z-10" />
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col items-start text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-2xl font-bold mb-2">{cat.name}</h3>
                <span className="font-body text-sm bg-white/20 backdrop-blur-md px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.items}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
