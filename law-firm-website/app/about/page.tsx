export default function About() {
  const attorneys = [
    {
      name: "김정의",
      position: "대표 변호사",
      specialty: "기업 법무, M&A",
      description: "서울대학교 법학과 졸업, 사법연수원 수료, 전 대형로펌 파트너 변호사",
    },
    {
      name: "이공정",
      position: "파트너 변호사",
      specialty: "민사, 부동산",
      description: "고려대학교 법학과 졸업, 전 판사 출신",
    },
    {
      name: "박신뢰",
      position: "수석 변호사",
      specialty: "형사, 가사",
      description: "연세대학교 법학전문대학원 졸업, 형사 전문 변호사",
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">법인 소개</h1>

        {/* Introduction */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">
              "정의와 신뢰를 바탕으로 고객과 함께 성장합니다."
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              법무법인 정의는 고객의 복잡하고 어려운 법률 문제를 해결하기 위해 설립되었습니다.
              각 분야의 전문 변호사들이 협업하여 최상의 솔루션을 제공하며,
              언제나 고객의 입장에서 생각하고 행동합니다.
            </p>
          </div>
        </section>

        {/* Vision/Values */}
        <section className="mb-20 bg-slate-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center text-slate-800">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-2">정의 (Justice)</h3>
              <p className="text-gray-600">법과 원칙에 입각하여 올바른 해결책을 제시합니다.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">신뢰 (Trust)</h3>
              <p className="text-gray-600">고객과의 신뢰를 가장 소중한 가치로 여깁니다.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">전문성 (Expertise)</h3>
              <p className="text-gray-600">끊임없는 연구와 노력으로 최고의 전문성을 갖춥니다.</p>
            </div>
          </div>
        </section>

        {/* Attorneys */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">구성원 소개</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attorneys.map((attorney, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300">
                <div className="w-24 h-24 bg-slate-300 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white">
                  {attorney.name[0]}
                </div>
                <h3 className="text-xl font-bold text-center mb-1">{attorney.name}</h3>
                <p className="text-blue-600 text-center font-medium mb-4">{attorney.position}</p>
                <div className="text-sm text-gray-500 mb-2 text-center">전문분야: {attorney.specialty}</div>
                <p className="text-gray-600 text-center text-sm">{attorney.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
