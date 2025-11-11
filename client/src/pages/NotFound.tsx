import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-[#003D82] mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              الصفحة غير موجودة
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              عذراً، الصفحة التي تبحث عنها غير موجودة أو تم حذفها.
            </p>
          </div>

          <Link href="/">
            <button className="bg-[#003D82] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#002A5C] transition-colors inline-flex items-center gap-2">
              <Home size={20} />
              العودة إلى الرئيسية
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
