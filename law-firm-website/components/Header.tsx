import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">법무법인 정의</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-slate-300">홈</Link></li>
            <li><Link href="/about" className="hover:text-slate-300">법인 소개</Link></li>
            <li><Link href="/services" className="hover:text-slate-300">업무 분야</Link></li>
            <li><Link href="/contact" className="hover:text-slate-300">상담 문의</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
