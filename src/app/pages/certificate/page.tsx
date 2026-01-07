/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import MainLayout from '@/components/MainLayout';

// Define the Certificate type
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

function Certificate() {
  // State to track which certificate is being viewed
  const [viewingCertificate, setViewingCertificate] = useState<Certificate | null>(null);

  // Sample certificate data
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Programming Test Certification",
      issuer: "Born to Dev",
      date: "11 เมษายน 2567",
      image: "/bortodev.png"
    },
    {
      id: 2,
      title: "ทดสอบ HSK Level 2",
      issuer: "สถาบันขงจื่อ มหาวิทยาลัยเชียงใหม่",
      date: "21 กุมภาพันธ์ 2564",
      image: "/HSK2.png"
    },
    {
      id: 3,
      title: "ประกวดสิ่งประดิษฐ์",
      issuer: "สำนักงานคณะกรรมการอาชีวะศึกษา",
      date: "5 ธันวาคม 2562",
      image: "/certificate.jpg"
    }
  ];

  // Function to open the modal with the selected certificate
  const openModal = (certificate: Certificate) => {
    setViewingCertificate(certificate);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Function to close the modal
  const closeModal = () => {
    setViewingCertificate(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ใบรับรองวิชาชีพ
                </span>
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto shadow-lg mb-4"></div>
              <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
                คอลเล็กชันใบรับรองที่แสดงความเชี่ยวชาญและการเรียนรู้อย่างต่อเนื่อง
              </p>
            </div>
          </div>
          
          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((certificate, idx) => (
            <div
              key={certificate.id}
              className="group relative bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-500 hover:shadow-indigo-300/50 hover:-translate-y-3 hover:scale-105 cursor-pointer"
              onClick={() => openModal(certificate)}
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Image Section */}
              <div className="relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg">
                  🏆 Certified
                </div>
                
                <div className="relative h-56 bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl text-indigo-600 font-bold shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      คลิกเพื่อดู
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight min-h-[3.5rem]">
                  {certificate.title}
                </h3>
                
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-xl border border-indigo-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.328.996.356 1.06a1 1 0 00.95.68h1.268a1 1 0 00.95-.68l.356-1.06-2.328-.996a1 1 0 11.788-1.838l4 1.714a1 1 0 01.356.257l2.644-1.131a1 1 0 000-1.84l-7-3z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{certificate.issuer}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-xl border border-purple-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{certificate.date}</span>
                  </div>
                </div>
                
                <button 
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-300/50 transform hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(certificate);
                  }}
                >
                  ดูใบรับรอง
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Modal for viewing certificate */}
      {viewingCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="max-w-5xl w-full bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 transform transition-all duration-300 scale-95 animate-scaleIn">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-indigo-100 bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {viewingCertificate.title}
                </h3>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-xl cursor-pointer transition-all duration-200 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Image */}
            <div className="p-8 bg-gradient-to-br from-slate-50 to-indigo-50">
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 border-4 border-gradient-to-r from-indigo-200 to-purple-200">
                <img 
                  src={viewingCertificate.image} 
                  alt={viewingCertificate.title} 
                  className="w-full object-contain rounded-xl"
                  style={{ maxHeight: "65vh" }} 
                />
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-indigo-100">
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <p className="font-bold text-gray-800">{viewingCertificate.issuer}</p>
                </div>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {viewingCertificate.date}
                </p>
              </div>
              <button 
                onClick={closeModal}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-300/50 transform hover:scale-105"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </MainLayout>
  );
}

export default Certificate;