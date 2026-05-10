import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import QuickCategories from '../components/home/QuickCategories';
import Bestsellers from '../components/home/Bestsellers';

// Mock components to fill out the page
function WhyUsMock() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">لماذا أرابيلا؟ <br/><span className="text-gold font-light italic">الحرفية المصرية برؤية عالمية</span></h2>
            <ul className="space-y-8 mt-12">
              {[
                { title: "جودة أخشاب عالية الصلابة", desc: "نستخدم أخشاب الزان الأحمر والأرو المقاومة للزمن." },
                { title: "تصنيع بالطلب وتعديل المقاسات", desc: "نعدل تصميم غرفتك لتناسب مساحة منزلك بالمليمتر." },
                { title: "خدمة ما بعد البيع استثنائية", desc: "فريق جاهز لدعمك وصيانة الأثاث لأكثر من ٥ سنوات." },
                { title: "أنظمة تقسيط مريحة", desc: "شراكات مع كافة بنوك مصر وشركات التقسيط المرنة." }
              ].map((item, idx) => (
                <li key={idx} className="flex flex-col gap-2 border-r-2 border-gold/50 pr-6 pb-2 hover:border-gold transition-colors">
                  <h4 className="font-display font-semibold text-2xl">{item.title}</h4>
                  <p className="font-body text-white/60 text-lg leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-8 md:mt-0">
             <div className="absolute inset-0 bg-gold/20 -translate-x-4 translate-y-4 rounded-[40px] z-0"></div>
             <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&auto=format&fit=crop&w=1000" alt="Arabella Quality" className="relative z-10 w-full h-[600px] object-cover rounded-[32px] shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowroomMock() {
  return (
    <section id="showroom" className="py-32 bg-beige text-center">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
        <span className="text-xs font-bold tracking-widest text-gold mb-6 inline-block font-body">تفضل بزيارتنا</span>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-dark mb-8 leading-tight">اكتشف المعرض الأضخم في التجمع</h2>
        <p className="font-body text-dark/70 text-xl mb-12 leading-relaxed">
          استمتع بتجربة تسوق فريدة، ولمس الخامات الطبيعية ومشاهدة أكثر من ٥٠ غرفة مجهزة بالكامل لتلهمك تصميم بيتك الجديد.
        </p>
        <button className="bg-dark text-white px-10 py-5 rounded-xl font-bold font-body hover:bg-gold transition-colors text-lg flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)]">
          احجز موعد لزيارة المعرض
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <QuickCategories />
      <Bestsellers />
      <WhyUsMock />
      <ShowroomMock />
    </div>
  );
}
