import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // في التطبيق الفعلي، سيتم إرسال البيانات إلى خادم
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // إخفاء رسالة النجاح بعد 3 ثوان
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      details: ['+966 50 123 4567', '+966 11 456 7890'],
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@kreezgroup.com', 'sales@kreezgroup.com'],
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['الرياض، المملكة العربية السعودية', 'حي النخيل، الطريق الدائري الشرقي'],
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['السبت - الخميس: 8:00 - 17:00', 'الجمعة: مغلق'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#003D82] to-[#0052B4] text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
            <p className="text-xl text-gray-100">
              نحن هنا للإجابة على جميع استفساراتك والتعاون معك
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <Icon size={32} className="text-[#003D82] mb-4" />
                    <h3 className="text-lg font-bold text-[#003D82] mb-3">{info.title}</h3>
                    <div className="space-y-2">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-8 text-center">
                أرسل لنا رسالة
              </h2>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-8 flex items-center gap-3">
                  <Send size={20} />
                  <p>شكراً لك! تم استقبال رسالتك بنجاح. سنتواصل معك قريباً.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[#003D82] mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003D82] focus:ring-2 focus:ring-[#003D82] focus:ring-opacity-20"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#003D82] mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003D82] focus:ring-2 focus:ring-[#003D82] focus:ring-opacity-20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-[#003D82] mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003D82] focus:ring-2 focus:ring-[#003D82] focus:ring-opacity-20"
                      placeholder="+966 50 123 4567"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-[#003D82] mb-2">
                      الموضوع *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003D82] focus:ring-2 focus:ring-[#003D82] focus:ring-opacity-20"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استفسار عن المنتجات">استفسار عن المنتجات</option>
                      <option value="طلب عرض سعر">طلب عرض سعر</option>
                      <option value="شراكة وتعاون">شراكة وتعاون</option>
                      <option value="شكوى أو اقتراح">شكوى أو اقتراح</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-bold text-[#003D82] mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#003D82] focus:ring-2 focus:ring-[#003D82] focus:ring-opacity-20 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#003D82] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#002A5C] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-8 text-center">
              موقعنا على الخريطة
            </h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2604149991!2d46.67160397346182!3d24.774265344778897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
