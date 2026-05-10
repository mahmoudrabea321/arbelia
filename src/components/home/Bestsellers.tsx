import ProductCard from '../ui/ProductCard';
import { ArrowLeft } from 'lucide-react';

const products = [
  {
    id: "prod-1",
    name: "ركنة كوين المودرن بحرف L باللون الرمادي الفاتح",
    category: "ركنات",
    price: "٣٤,٥٠٠",
    oldPrice: "٤٢,٠٠٠",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&auto=format&fit=crop&w=800",
    hoverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&auto=format&fit=crop&w=800",
    badges: ["الأكثر مبيعاً", "خصم المهرجان"],
    materials: ["كتان طبيعي", "خشب زان"]
  },
  {
    id: "prod-2",
    name: "غرفة نوم أورورا الفاخرة المزدوجة باللون البني",
    category: "غرف نوم",
    price: "٥٦,٠٠٠",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&auto=format&fit=crop&w=800",
    hoverImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&auto=format&fit=crop&w=800",
    badges: ["مجموعة ٢٠٢٦"],
    materials: ["خشب أرو", "قطيفة"]
  },
  {
    id: "prod-3",
    name: "ترابيزة سفرة مونارك مع ٦ كراسي باللون البيج",
    category: "سفرة",
    price: "٢٨,٩٠٠",
    oldPrice: "٣٢,٠٠٠",
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&auto=format&fit=crop&w=800",
    badges: ["شحن مجاني"],
    materials: ["رخام ماكوتا", "حديد مشغول"]
  },
  {
    id: "prod-4",
    name: "كرسي أكسنت لارك بذراعين مخملي باللون الأخضر الزيتي",
    category: "كراسي جلوس",
    price: "٨,٢٠٠",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&auto=format&fit=crop&w=800",
    materials: ["مخمل ممتاز", "قاعدة ستيل"]
  }
];

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="py-20 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark mb-4 tracking-tight">القطع الأكثر طلباً</h2>
            <p className="font-body text-dark/70 text-lg font-medium">اختيارات عملائنا المفضلة. تحف فنية مريحة تجمع بين الفخامة والعملية، متوفرة الآن للطلب المباشر.</p>
          </div>
          <button className="flex items-center gap-2 font-display font-bold text-dark border-b-2 border-dark pb-1 hover:text-gold hover:border-gold transition-colors shrink-0 group">
            مشاهدة الكتالوج الأسبوعي
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-6 md:gap-y-16">
          {products.map((p) => (
            <ProductCard 
              key={p.id}
              id={p.id}
              name={p.name}
              category={p.category}
              price={p.price}
              oldPrice={p.oldPrice}
              image={p.image}
              hoverImage={p.hoverImage}
              badges={p.badges}
              materials={p.materials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
