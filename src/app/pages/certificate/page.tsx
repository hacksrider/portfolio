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
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Professional Certificates</h1>
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of professional certifications showcasing my expertise and continuous learning journey.
          </p> */}
        </div>
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map(certificate => (
            <div
              key={certificate.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300  hover:cursor-pointer hover:scale-105 transform"
            >
              <div className="relative">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{certificate.title}</h3>
                <div className="flex items-center text-gray-600 mb-1">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.328.996.356 1.06a1 1 0 00.95.68h1.268a1 1 0 00.95-.68l.356-1.06-2.328-.996a1 1 0 11.788-1.838l4 1.714a1 1 0 01.356.257l2.644-1.131a1 1 0 000-1.84l-7-3z" />
                    <path d="M13.902 4.25l2.375 1.017-1.985.85a.996.996 0 00-.53.53l-.85 1.986-1.017-2.375a1 1 0 00-.485-.485l-2.375-1.017 1.985-.85a1 1 0 00.53-.53l.85-1.986 1.017 2.375a1 1 0 00.485.485z" />
                  </svg>
                  <span>{certificate.issuer}</span>
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{certificate.date}</span>
                </div>
                <button 
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold rounded-md transition-colors duration-200"
                  onClick={() => openModal(certificate)}
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing certificate */}
      {viewingCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b bg-gray-300">
              <h3 className="text-xl font-bold">{viewingCertificate.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <img 
                src={viewingCertificate.image} 
                alt={viewingCertificate.title} 
                className="w-full object-contain"
                style={{ maxHeight: "70vh" }} 
              />
            </div>
            <div className="p-4 bg-gray-300 flex justify-between items-center">
              <div>
                <p className="font-semibold">{viewingCertificate.issuer}</p>
                <p className="text-sm text-gray-500">{viewingCertificate.date}</p>
              </div>
              <button 
                onClick={closeModal}
                className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default Certificate;