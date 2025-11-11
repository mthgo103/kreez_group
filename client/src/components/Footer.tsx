import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003D82] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* عن الشركة */}
          <div>
            <h3 className="text-xl font-bold mb-4">مجموعة كريز للصناعة</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              متخصصة في إنتاج العبوات المعدنية والبلاستيكية عالية الجودة للمواد الغذائية والصناعات المختلفة.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gray-300 transition-colors">الرئيسية</a></li>
              <li><a href="/products" className="hover:text-gray-300 transition-colors">المنتجات</a></li>
              <li><a href="/about" className="hover:text-gray-300 transition-colors">نبذة عنا</a></li>
              <li><a href="/contact" className="hover:text-gray-300 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h3 className="text-lg font-bold mb-4">معلومات التواصل</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>info@kreezgroup.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <span>السبت - الخميس: 8:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* الفاصل */}
        <div className="border-t border-gray-400 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-200">
            &copy; 2024 مجموعة كريز للصناعة. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">سياسة الخصوصية</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
