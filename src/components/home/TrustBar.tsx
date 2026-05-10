import { Truck, ShieldCheck, Ruler, Wrench } from 'lucide-react';

export default function TrustBar() {
  const features = [
    { icon: ShieldCheck, title: "ضمان الجودة", subtitle: "ضمان ٥ سنوات على الخشب" },
    { icon: Wrench, title: "خامات ممتازة", subtitle: "أخشاب طبيعية وأقمشة مستوردة" },
    { icon: Truck, title: "توصيل سريع", subtitle: "توصيل وتركيب لكل المحافظات" },
    { icon: Ruler, title: "مقاسات خاصة", subtitle: "تصنيع بالطلب حسب مساحة بيتك" },
  ];

  return (
    <section className="bg-ivory pt-6 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex flex-col items-center md:items-start md:flex-row gap-3 px-4 text-center md:text-start">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 text-dark">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-body font-bold text-dark text-xs">{feature.title}</h3>
                  <p className="font-body opacity-50 text-dark text-xs mt-0.5">{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
