import { ArrowLeft, Package, Factory, Award } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const factories = [
    {
      id: 1,
      name: 'مصنع كريز للصناعات المعدنية',
      description: 'متخصص في إنتاج العبوات المعدنية عالية الجودة',
      products: ['علب المعمول', 'علب الكلجيا', 'عبوات زيت الزيتون'],
      icon: Factory,
    },
    {
      id: 2,
      name: 'مصنع عبدالرحمن عبدالله الحماد للبلاستيك',
      description: 'متخصص في إنتاج العبوات البلاستيكية الشفافة',
      products: ['عبوات التمور', 'عبوات الأجبان', 'عبوات الخضروات', 'عبوات الكعكات والمعجنات'],
      icon: Package,
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'جودة عالية',
      description: 'منتجات تتوافق مع أعلى معايير الجودة الدولية',
    },
    {
      icon: Factory,
      title: 'تقنيات حديثة',
      description: 'استخدام أحدث التقنيات في الإنتاج والتصنيع',
    },
    {
      icon: Package,
      title: 'تنوع المنتجات',
      description: 'تشكيلة واسعة من العبوات المعدنية والبلاستيكية',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#003D82] to-[#0052B4] text-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                مجموعة كريز للصناعة
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8">
                رائدة في إنتاج العبوات المعدنية والبلاستيكية عالية الجودة للمواد الغذائية
              </p>
              <Link href="/products">
                <button className="bg-white text-[#003D82] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                  استكشف منتجاتنا
                  <ArrowLeft size={20} />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">لماذا تختار مجموعة كريز</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Icon size={40} className="text-[#003D82] mb-4" />
                    <h3 className="text-xl font-bold text-[#003D82] mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Factories Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">مصانعنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {factories.map((factory) => {
                const Icon = factory.icon;
                return (
                  <div key={factory.id} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#003D82] transition-colors">
                    <div className="bg-gradient-to-r from-[#003D82] to-[#0052B4] p-6 text-white">
                      <Icon size={32} className="mb-3" />
                      <h3 className="text-2xl font-bold">{factory.name}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{factory.description}</p>
                      <div className="mb-4">
                        <h4 className="font-bold text-[#003D82] mb-3">المنتجات الرئيسية:</h4>
                        <ul className="space-y-2">
                          {factory.products.map((product) => (
                            <li key={product} className="flex items-center gap-2 text-gray-700">
                              <span className="w-2 h-2 bg-[#003D82] rounded-full"></span>
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="/products">
                        <button className="text-[#003D82] font-bold hover:text-[#002A5C] transition-colors flex items-center gap-2">
                          اعرف المزيد
                          <ArrowLeft size={16} />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#003D82] text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تريد التعاون معنا؟</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              نحن نقدم حلولاً مخصصة لاحتياجاتك الصناعية. تواصل معنا اليوم للحصول على عرض خاص.
            </p>
            <Link href="/contact">
              <button className="bg-white text-[#003D82] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                تواصل معنا
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
