export default function Services() {
  const services = [
    {
      title: "민사 소송 (Civil Litigation)",
      description: "복잡한 이해관계가 얽힌 민사 분쟁에서 의뢰인의 권리를 지킵니다.",
      details: [
        "부동산 분쟁 (매매, 임대차, 소유권)",
        "손해배상 청구",
        "채권 추심 및 채무 부존재 확인",
        "계약 위반 및 이행 청구"
      ]
    },
    {
      title: "형사 변호 (Criminal Defense)",
      description: "억울한 혐의를 벗고 정당한 권리를 보호받을 수 있도록 조력합니다.",
      details: [
        "경찰/검찰 수사 단계 동석 및 변호",
        "영장 실질 심사",
        "형사 재판 변론",
        "성범죄, 재산범죄, 교통사고 등"
      ]
    },
    {
      title: "기업 법무 (Corporate Law)",
      description: "기업의 설립부터 운영, 분쟁 해결까지 원스톱 법률 서비스를 제공합니다.",
      details: [
        "법인 설립 및 정관 작성",
        "각종 계약서 검토 및 작성",
        "M&A 및 기업 실사",
        "노무 관리 및 컴플라이언스"
      ]
    },
    {
      title: "가사/이혼 (Family Law)",
      description: "가정 내의 예민한 문제들을 세심하고 전문적으로 다룹니다.",
      details: [
        "이혼 및 재산분할",
        "양육권 및 친권 소송",
        "상속 및 유류분 청구",
        "성년후견 개시 심판"
      ]
    }
  ];

  return (
    <div className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">업무 분야</h1>
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 border-b pb-4 border-slate-100">
                {service.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
