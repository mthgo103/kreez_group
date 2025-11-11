import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Zap, Target } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: CheckCircle,
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا',
    },
    {
      icon: Users,
      title: 'الموثوقية',
      description: 'شركاء موثوقون لعملائنا منذ سنوات عديدة',
    },
    {
      icon: Zap,
      title: 'الابتكار',
      description: 'استخدام أحدث التقنيات والتطورات الصناعية',
    },
    {
      icon: Target,
      title: 'الرضا',
      description: 'تحقيق رضا العملاء هو أولويتنا الأساسية',
    },
  ];

  const milestones = [
    {
      year: '2010',
      title: 'التأسيس',
      description: 'تأسيس مصنع كريز للصناعات المعدنية',
    },
    {
      year: '2015',
      title: 'التوسع',
      description: 'افتتاح مصنع عبدالرحمن عبدالله الحماد للبلاستيك',
    },
    {
      year: '2018',
      title: 'الاعتماد',
      description: 'الحصول على شهادات الجودة الدولية ISO',
    },
    {
      year: '2023',
      title: 'النمو',
      description: 'توسيع الطاقة الإنتاجية وزيادة المنتجات',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#003D82] to-[#0052B4] text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">نبذة عنا</h1>
            <p className="text-xl text-gray-100">
              تعرف على مجموعة كريز للصناعة ورحلتنا نحو التميز
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-6">
                  من نحن؟
                </h2>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  مجموعة كريز للصناعة هي مجموعة متخصصة في إنتاج العبوات المعدنية والبلاستيكية عالية الجودة للمواد الغذائية والصناعات المختلفة.
                </p>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  تضم المجموعة مصنعين رائدين في مجالهما، حيث يتمتع كل منهما بخبرة عميقة وتقنيات حديثة في مجال التصنيع والإنتاج.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  نحن ملتزمون بتقديم منتجات تتوافق مع أعلى معايير الجودة الدولية، وتلبي احتياجات عملائنا بكفاءة واحترافية عالية.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#003D82] to-[#0052B4] rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">إحصائياتنا</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">2</div>
                    <p className="text-gray-200">مصانع متخصصة</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">1000+</div>
                    <p className="text-gray-200">عميل راضٍ</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <p className="text-gray-200">سنة خبرة</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <p className="text-gray-200">ضمان الجودة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factories Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-12 text-center">
              مصانعنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Factory 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-[#003D82] to-[#0052B4] p-6 text-white">
                  <h3 className="text-2xl font-bold">مصنع كريز للصناعات المعدنية</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    متخصص في إنتاج العبوات المعدنية عالية الجودة للمواد الغذائية والصناعات المختلفة.
                  </p>
                  <h4 className="font-bold text-[#003D82] mb-3">المنتجات الرئيسية:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#003D82] rounded-full"></span>
                      علب المعمول والحلويات
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#003D82] rounded-full"></span>
                      علب الكلجيا والمنتجات الغذائية
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#003D82] rounded-full"></span>
                      عبوات زيت الزيتون والزيوت
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500">
                    معايير الجودة: ISO 9001 | آمن غذائياً | مقاوم للرطوبة
                  </p>
                </div>
              </div>

              {/* Factory 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-[#003D82] to-[#0052B4] p-6 text-white">
                  <h3 className="text-2xl font-bold">مصنع عبدالرحمن عبدالله الحماد للبلاستيك</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    متخصص في إنتاج العبوات البلاستيكية الشفافة من مادة PET عالية الجودة.
                  </p>
                  <h4 className="font-bold text-[#003D82] mb-3">المنتجات الرئيسية:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#003D82] rounded-full"></span>
                      عبوات التمور والحبوب
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#003D82] rounded-full"></span>
                      عبوات الأجبان والألبان
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-[#003D82] rounded-full"></span>
                      عبوات الخضروات والفواكه والمعجنات
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500">
                    معايير الجودة: ISO 9001 | PET شفاف | آمن غذائياً
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-12 text-center">
              قيمنا الأساسية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <Icon size={40} className="text-[#003D82] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[#003D82] mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-12 text-center">
              رحلتنا عبر السنين
            </h2>
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-8 mb-8 relative">
                  {/* Timeline Line */}
                  {index !== milestones.length - 1 && (
                    <div className="absolute right-12 top-20 w-1 h-16 bg-[#003D82] opacity-30"></div>
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-[#003D82] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-4">
                    <h3 className="text-2xl font-bold text-[#003D82] mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
