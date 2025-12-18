export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">법무법인 정의</h3>
          <p>고객의 권익을 최우선으로 생각합니다.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">연락처</h4>
          <p>서울시 서초구 서초대로 123</p>
          <p>전화: 02-1234-5678</p>
          <p>이메일: info@lawfirm.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">업무 시간</h4>
          <p>평일: 09:00 - 18:00</p>
          <p>주말 및 공휴일 휴무</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-slate-700 text-center text-sm">
        &copy; {new Date().getFullYear()} 법무법인 정의. All rights reserved.
      </div>
    </footer>
  );
}
