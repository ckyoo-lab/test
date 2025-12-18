import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            법무법인 정의
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            고객의 권익을 최우선으로 생각하는 신뢰할 수 있는 법률 파트너입니다.
            복잡한 법률 문제, 저희와 함께 해결하세요.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              무료 상담 신청
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              업무 분야 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            주요 업무 분야
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-slate-900">민사 소송</h3>
              <p className="text-gray-600 mb-4">
                부동산, 손해배상, 채권채무 등 다양한 민사 분쟁을 신속하고 정확하게 해결합니다.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:underline">자세히 보기 &rarr;</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-slate-900">형사 변호</h3>
              <p className="text-gray-600 mb-4">
                수사 단계부터 재판까지 의뢰인의 인권을 보호하고 최선의 결과를 도출합니다.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:underline">자세히 보기 &rarr;</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-slate-900">기업 법무</h3>
              <p className="text-gray-600 mb-4">
                계약 검토, 자문, M&A 등 기업 운영에 필요한 모든 법률 서비스를 제공합니다.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:underline">자세히 보기 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
            왜 법무법인 정의인가?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">풍부한 경험</h4>
                    <p className="text-gray-600">다양한 사건 처리 경험을 보유한 전문 변호사 그룹</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">승소율</h4>
                    <p className="text-gray-600">높은 승소율로 증명된 탁월한 실력</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <h4 className="font-bold text-lg">1:1 맞춤 서비스</h4>
                    <p className="text-gray-600">의뢰인 중심의 세심하고 꼼꼼한 법률 서비스</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                당신의 고민, 전문가와 상의하세요
              </h3>
              <p className="text-gray-600 mb-6">
                법률 문제는 초기 대응이 가장 중요합니다. 혼자 고민하지 마시고 전문가의 도움을 받으세요.
                저희 법무법인 정의가 당신의 곁에서 끝까지 함께하겠습니다.
              </p>
              <Link
                href="/about"
                className="inline-block bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                법인 소개 더보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
