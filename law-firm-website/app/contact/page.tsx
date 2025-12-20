'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">상담 문의</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800">오시는 길</h2>
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <p className="mb-4">
                <strong>주소:</strong><br />
                서울특별시 서초구 서초대로 123, 법조빌딩 10층
              </p>
              <p className="mb-4">
                <strong>전화:</strong><br />
                02-1234-5678
              </p>
              <p className="mb-4">
                <strong>이메일:</strong><br />
                info@lawfirm.com
              </p>
              <p>
                <strong>업무 시간:</strong><br />
                평일 09:00 - 18:00 (주말, 공휴일 휴무)
              </p>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center text-slate-500">
              [지도 영역]
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-slate-800">온라인 상담 신청</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
