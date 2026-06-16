"use client"
import React, { useState, useEffect } from 'react'
import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import Animation from '@/components/Animation'
import { User, Github, Mail, Phone, MapPin, FileText, ChevronUp, Facebook, Instagram, X } from 'lucide-react'

function Profile() {
  const [scrolled, setScrolled] = useState(false);
  const [animateAvatar, setAnimateAvatar] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for initial animation
  useEffect(() => {
    setTimeout(() => {
      setAnimateAvatar(true);
    }, 500);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to toggle image modal
  const toggleImageModal = () => {
    setShowImageModal(!showImageModal);
  };

  // Function to prevent scroll when modal is open
  useEffect(() => {
    if (showImageModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showImageModal]);

  return (
    <MainLayout>
      <div className="flex min-h-screen bg-gray-50">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Content */}
          <div className="pt-4 sm:pt-6 md:pt-8 pb-8 md:pb-10 px-4 sm:px-5 md:px-6 lg:px-8 max-w-5xl mx-auto">
            {/* Profile Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-indigo-500/20 hover:shadow-3xl">
              {/* Hero Background with Animated Gradient & Particles */}
              <div className="h-32 sm:h-40 md:h-56 bg-gradient-to-r from-slate-700 via-blue-800 to-slate-800 relative overflow-hidden">
                {/* Animated particles/dots */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/20 to-pink-500/30"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-sm"></div>
              </div>

              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 md:gap-6 px-4 sm:px-5 md:px-8 -mt-14 sm:-mt-16 md:-mt-20 relative mb-5 md:mb-8">
                {/* Avatar with Animation and Click Functionality */}
                <div className="relative group">
                  {/* Animated ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75 group-hover:opacity-100 animate-pulse"></div>

                  <div
                    className={`relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl border-4 border-white transition-all duration-700 ${animateAvatar ? 'scale-100 rotate-0' : 'scale-0 rotate-180'} cursor-pointer hover:scale-105 hover:rotate-2`}
                    onClick={toggleImageModal}
                    title="คลิกเพื่อดูรูปขนาดใหญ่"
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/logo-profile.jpg"
                        alt="Avatar"
                        width={176}
                        height={176}
                        className="w-full h-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">ดูรูปขนาดใหญ่</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Name & Title with Animation */}
                <div className="text-center md:text-left flex-1 mt-2 sm:mt-4 md:mt-12">
                  <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 md:mb-3 animate-fadeIn leading-tight px-2 md:px-0">
                    เกียรติภูมิ โภคา (แฮ็คส์)
                  </h1>
                  <div className="h-0.5 md:h-1 w-20 sm:w-24 md:w-28 bg-blue-600 rounded-full mx-auto md:mx-0 mb-2 sm:mb-3 md:mb-4"></div>
                  <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-blue-700 font-semibold mb-3 md:mb-4 animate-fadeIn px-2 md:px-0" style={{ animationDelay: '0.2s' }}>
                    Programmer R&D · Full-stack Developer
                  </p>

                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-700 mb-4 md:mb-5 justify-center md:justify-start px-2 md:px-0">
                    <div className="flex items-center bg-gray-50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 text-xs sm:text-sm md:text-base">
                      <Mail size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 md:mr-2.5 text-blue-600 flex-shrink-0" />
                      <span className="truncate font-medium max-w-[150px] sm:max-w-none text-gray-700">kriattiphum.p@gmail.com</span>
                    </div>
                    <div className="flex items-center bg-gray-50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                      <Phone size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 md:mr-2.5 text-teal-600 flex-shrink-0" />
                      <span className="font-medium whitespace-nowrap text-gray-700">098-158-6900</span>
                    </div>
                    <div className="flex items-center bg-gray-50 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                      <MapPin size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2 md:mr-2.5 text-slate-600 flex-shrink-0" />
                      <span className="font-medium whitespace-nowrap text-gray-700">จังหวัดสกลนคร 47220</span>
                    </div>
                     {/* Social Links with Hover Effects */}
                     <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 justify-center md:justify-start">
                       <a href="https://github.com/hacksrider" target='_blank' className="relative group bg-gradient-to-br from-slate-100 to-slate-200 hover:from-slate-800 hover:to-slate-900 text-slate-700 hover:text-white p-2 sm:p-2.5 md:p-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-slate-500/30 hover:-translate-y-1 border border-slate-200 hover:border-slate-700">
                         <Github size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 relative z-10" />
                         <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                       </a>
                       <a href="https://web.facebook.com/hacks.rider10" target='_blank' className="relative group bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-600 hover:to-blue-700 text-blue-600 hover:text-white p-2 sm:p-2.5 md:p-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 border border-blue-200 hover:border-blue-600">
                         <Facebook size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 relative z-10" />
                       </a>
                       <a href="https://www.instagram.com/hacks_rider10/" target='_blank' className="relative group bg-gradient-to-br from-pink-100 to-purple-200 hover:from-pink-600 hover:to-purple-600 text-pink-600 hover:text-white p-2 sm:p-2.5 md:p-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1 border border-pink-200 hover:border-pink-600">
                         <Instagram size={16} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 relative z-10" />
                       </a>
                       <a href="https://line.me/ti/p/hackskie" target="_blank" className="relative group bg-gradient-to-br from-green-100 to-green-200 hover:from-green-500 hover:to-green-600 text-green-600 hover:text-white p-2 sm:p-2.5 md:p-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-400/30 hover:-translate-y-1 border border-green-200 hover:border-green-600 flex items-center justify-center">
                         <svg className="relative z-10" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <g>
                            <path d="M12 2C6.478 2 2 5.87 2 10.358c0 2.74 1.835 5.158 4.631 6.63-.145.483-.94 3.128-0.967 3.212a.278.278 0 0 0 .107.316.289.289 0 0 0 .348.012c.142-.088 3.335-2.229 4.69-3.135.385.045.78.069 1.191.069 5.522 0 10-3.87 10-8.358C22 5.87 17.522 2 12 2zm-1.096 10.326h-1.45V9.04h1.45v3.286zm-0.724-3.731a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64zm2.835 3.731a.457.457 0 0 1-.456-.455V9.039h1.45v1.208a.454.454 0 0 1-.447.455h-.547zm3.323 0h-.637l-1.022-1.374v1.374h-1.45V9.039h1.099l.976 1.332V9.039h1.034v3.287zm-7.997-1.575v1.575h-1.45v-3.287h1.45v1.575zm.725-1.63a.82.82 0 1 1 0 1.639.82.82 0 0 1 0-1.64z"/>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>


                </div>

                {/* Stats with Enhanced Animation */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-8 px-1 sm:px-2 md:px-0">
                  <div
                    className="group text-center bg-white p-3 sm:p-4 md:p-5 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer border border-gray-200 hover:border-blue-300"
                    onClick={() => window.open('/resume_th.pdf', '_blank')}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-blue-700 transition-colors">
                      <FileText size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1 font-medium">ภาษาไทย</p>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-slate-700">เรซูเม่</p>
                  </div>

                  <div
                    className="group text-center bg-white p-3 sm:p-4 md:p-5 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer border border-gray-200 hover:border-teal-300"
                    onClick={() => window.open('/resume_en.pdf', '_blank')}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-teal-700 transition-colors">
                      <FileText size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1 font-medium">English</p>
                    <p className="text-sm sm:text-base md:text-lg font-bold text-slate-700">Resume</p>
                  </div>
                </div>
              </div>

              {/* About Me Section with Enhanced Styling */}
              <div className="px-4 sm:px-5 md:px-8 mb-5 md:mb-8">
                <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-5">
                  <div className="p-1.5 sm:p-2 md:p-2.5 bg-blue-600 rounded-lg shadow-sm">
                    <User className="text-white" size={16} />
                  </div>
                  <h2 className="text-base sm:text-lg md:text-2xl font-bold text-slate-800">
                    เกี่ยวกับฉัน
                  </h2>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-0.5 h-full bg-blue-600 rounded-full"></div>

                  <div className="bg-white p-4 sm:p-5 md:p-6 pl-5 sm:pl-6 md:pl-8 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300">

                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      สวัสดีครับ ผมแฮ็คส์ครับ จบวิศวกรรมคอมพิวเตอร์จาก มทร.ธัญบุรี
                      <span className="inline-flex items-center px-2 py-0.5 mx-1 rounded-md bg-amber-100 text-amber-700 text-xs sm:text-sm font-bold">เกรด 3.35</span>
                      ตอนนี้ทำงานเป็น Programmer R&D ที่บริษัทไชโยไปป์ครับ
                    </p>

                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      งานหลักคือพัฒนาและดูแลระบบเว็บและ IoT ภายในบริษัท ทำทั้ง frontend, backend และ deploy บน GCP ถนัด <strong className="text-blue-700">React</strong> กับ <strong className="text-red-600">Laravel</strong> เป็นหลัก และมีประสบการณ์กับ <strong className="text-teal-700">ESP32</strong> สำหรับงาน automation ในโรงงานด้วยครับ
                    </p>

                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      มีพื้นฐานด้านไฟฟ้ากำลังจากเรียน ปวช.-ปวส. ที่วิทยาลัยเทคนิคสกลนคร ทำให้เข้าใจงาน hardware ได้ดีขึ้นครับ ตอนนี้ตั้งใจพัฒนาทักษะด้าน Microsoft Stack เพิ่มเติมด้วย
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs sm:text-sm font-medium rounded-lg">⚛️ React / Next.js</span>
                      <span className="px-3 py-1 bg-red-50 text-red-700 border border-red-200 text-xs sm:text-sm font-medium rounded-lg">🎯 Laravel / PHP</span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-700 border border-slate-200 text-xs sm:text-sm font-medium rounded-lg">🗄️ MySQL</span>
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 border border-teal-200 text-xs sm:text-sm font-medium rounded-lg">🤖 IoT / ESP32</span>
                      <span className="px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 text-xs sm:text-sm font-medium rounded-lg">☁️ GCP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animation Section */}
            <div className="mt-8 pb-4">
              <div className="text-center text-gray-600 text-3xl md:text-5xl font-light">
                <Animation />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300 animate-fadeIn cursor-pointer backdrop-blur-sm"
          onClick={toggleImageModal}
        >
          <div className="relative max-w-4xl mx-auto p-4">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 bg-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition-colors duration-300 z-10 cursor-pointer shadow-lg"
              onClick={toggleImageModal}
            >
              <X size={20} />
            </button>

            {/* Full-size image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo-profile.jpg"
                alt="เกียรติภูมิ โภคา"
                width={800}
                height={800}
                className="w-full h-auto"
                priority
              />

              {/* Image gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-center text-white">
                <h3 className="text-xl md:text-2xl font-bold">เกียรติภูมิ โภคา (แฮ็คส์)</h3>
                <p className="text-gray-300">Programmer R&D · Full-stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 z-30 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
      >
        <ChevronUp size={20} />
      </button>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </MainLayout>
  )
}

export default Profile