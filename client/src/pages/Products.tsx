import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package } from 'lucide-react';

export default function Products() {
  const metalProducts = [
    {
      id: 1,
      name: 'علب المعمول',
      description: 'علب معدنية عالية الجودة مصممة خصيصاً لتعبئة المعمول والحلويات التقليدية',
      features: ['مقاومة للرطوبة', 'تصاميم جذابة', 'أحجام متعددة'],
    },
    {
      id: 2,
      name: 'علب الكلجيا',
      description: 'عبوات معدنية متينة لحفظ الكلجيا والمنتجات الغذائية الأخرى',
      features: ['إغلاق محكم', 'حماية من التأكسد', 'سهولة الفتح والإغلاق'],
    },
    {
      id: 3,
      name: 'عبوات زيت الزيتون',
      description: 'علب معدنية متخصصة لحفظ زيت الزيتون بأفضل جودة',
      features: ['حماية من الضوء', 'عازلة للهواء', 'تصاميم فاخرة'],
    },
  ];

  const plasticProducts = [
    {
      id: 1,
      name: 'عبوات التمور',
      description: 'عبوات بلاستيكية شفافة من مادة PET عالية الجودة لتعبئة التمور',
      features: ['شفافة وجذابة', 'آمنة غذائياً', 'أحجام متنوعة'],
    },
    {
      id: 2,
      name: 'عبوات الأجبان',
      description: 'عبوات بلاستيكية مصممة خصيصاً لحفظ الأجبان بطريقة آمنة وصحية',
      features: ['محكمة الإغلاق', 'شفافة للعرض', 'سهلة التنظيف'],
    },
    {
      id: 3,
      name: 'عبوات الخضروات',
      description: 'عبوات بلاستيكية خفيفة الوزن لتعبئة الخضروات الطازجة',
      features: ['تهوية مناسبة', 'متينة وخفيفة', 'قابلة لإعادة الاستخدام'],
    },
    {
      id: 4,
      name: 'عبوات الكعكات والمعجنات',
      description: 'عبوات بلاستيكية شفافة لعرض الكعكات والمعجنات بشكل جذاب',
      features: ['شفافة وفاخرة', 'حماية من الرطوبة', 'متعددة الأحجام'],
    },
    {
      id: 5,
      name: 'عبوات الحلويات',
      description: 'عبوات بلاستيكية متنوعة لتعبئة جميع أنواع الحلويات',
      features: ['أشكال متعددة', 'آمنة للاستخدام الغذائي', 'سهلة الإغلاق'],
    },
  ];

  const ProductCard = ({ product }: { product: typeof metalProducts[0] }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-[#003D82] to-[#0052B4] p-6 text-white">
        <Package size={32} className="mb-3" />
        <h3 className="text-xl font-bold">{product.name}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div>
          <h4 className="font-bold text-[#003D82] mb-3">المميزات:</h4>
          <ul className="space-y-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-gray-700">
                <span className="w-2 h-2 bg-[#003D82] rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#003D82] to-[#0052B4] text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">منتجاتنا</h1>
            <p className="text-xl text-gray-100">
              تشكيلة واسعة من العبوات المعدنية والبلاستيكية عالية الجودة
            </p>
          </div>
        </section>

        {/* Metal Products Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-2">
                العبوات المعدنية
              </h2>
              <p className="text-gray-600 text-lg">
                من مصنع كريز للصناعات المعدنية
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {metalProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <section className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="border-t-2 border-gray-200"></div>
          </div>
        </section>

        {/* Plastic Products Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-2">
                العبوات البلاستيكية
              </h2>
              <p className="text-gray-600 text-lg">
                من مصنع عبدالرحمن عبدالله الحماد للبلاستيك
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plasticProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-8 md:p-12 border-l-4 border-[#003D82]">
              <h3 className="text-2xl font-bold text-[#003D82] mb-4">
                هل تحتاج إلى عبوات مخصصة؟
              </h3>
              <p className="text-gray-600 mb-6">
                نحن نقدم حلولاً مخصصة لاحتياجاتك الفريدة. يمكننا تصنيع عبوات بمواصفات وتصاميم خاصة تناسب منتجاتك تماماً.
              </p>
              <a href="/contact" className="inline-block bg-[#003D82] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#002A5C] transition-colors">
                اطلب عرض سعر
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
