import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80 pt-20 pb-24 md:pb-10 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-3xl tracking-tighter text-white">
                Lumina <span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 opacity-70">
              علامة تجارية مصرية رائدة في صناعة الأثاث المودرن الفاخر. نصنع تحفاً فنية تليق بمنزلك بأجود الخامات وأحدث التصميمات العالمية.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">الرئيسية</Link></li>
              <li><a href="#categories" className="hover:text-gold transition-colors">تسوق الغرف</a></li>
              <li><a href="#bestsellers" className="hover:text-gold transition-colors">الأكثر مبيعاً</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">عروض التوفير</a></li>
              <li><a href="#showroom" className="hover:text-gold transition-colors">احجز زيارة للفروع</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-6">تسوق الغرف</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">غرف المعيشة</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">غرف النوم</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">غرف السفرة</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">مكتبات التلفزيون</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">الركنات المودرن</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg text-white mb-6">تواصل معنا</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>التجمع الخامس، شارع التسعين الشمالي، بجوار وترواي، مصر</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span dir="ltr">+20 100 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span dir="ltr">info@luminafurniture.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Lumina Furniture. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-gold transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
