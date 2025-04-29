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
          <div className="pt-4 md:pt-8 pb-10 px-4 md:px-6 max-w-5xl mx-auto">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl transform hover:translate-y-[-2px]">
              {/* Hero Background with Animated Gradient */}
              <div className="h-36 md:h-48 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 relative bg-[length:200%_100%] animate-gradient">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-6 md:px-10 -mt-20 md:-mt-24 relative mb-8 md:mb-10">
                {/* Avatar with Animation and Click Functionality */}
                <div 
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white transition-all duration-700 ${animateAvatar ? 'scale-100 rotate-0' : 'scale-0 rotate-180'} cursor-pointer hover:scale-105`}
                  onClick={toggleImageModal}
                  title="คลิกเพื่อดูรูปขนาดใหญ่"
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-600 opacity-80"></div>
                    <Image 
                      src="/116530462027-1.jpg" 
                      alt="Avatar" 
                      width={160} 
                      height={160} 
                      className="relative z-10 w-full h-full object-cover rounded-full" 
                    />
                  </div>
                </div>

                {/* Name & Title with Animation */}
                <div className="text-center md:text-left flex-1 mt-4 md:mt-10">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 animate-fadeIn">
                    เกียรติภูมิ โภคา (แฮ็คส์)
                  </h1>
                  <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto md:mx-0 mb-3 md:mb-4"></div>
                  <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-medium mb-3 md:mb-4">
                    Web Developer
                  </p>

                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-3 md:gap-4 text-sm md:text-base text-gray-600 mb-4 md:mb-5 justify-center md:justify-start">
                    <div className="flex items-center bg-gray-50 px-3 md:px-4 py-1.5 rounded-full hover:bg-indigo-50 transition-colors duration-300 shadow-sm">
                      <Mail size={16} className="mr-2 text-indigo-500" />
                      <span className="truncate">kriattiphum.p@gmail.com</span>
                    </div>
                    <div className="flex items-center bg-gray-50 px-3 md:px-4 py-1.5 rounded-full hover:bg-indigo-50 transition-colors duration-300 shadow-sm">
                      <Phone size={16} className="mr-2 text-indigo-500" />
                      098-1586900
                    </div>
                    <div className="flex items-center bg-gray-50 px-3 md:px-4 py-1.5 rounded-full hover:bg-indigo-50 transition-colors duration-300 shadow-sm">
                      <MapPin size={16} className="mr-2 text-indigo-500" />
                      สกลนคร, ประเทศไทย
                    </div>
                  </div>

                  {/* Social Links with Hover Effects */}
                  <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
                    <a href="https://github.com/hacksrider" target='_blank' className="bg-gray-100 hover:bg-indigo-600 text-indigo-600 hover:text-white p-3 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <Github size={18} />
                    </a>
                    <a href="https://web.facebook.com/hacks.rider10" className="bg-gray-100 hover:bg-indigo-600 text-indigo-600 hover:text-white p-3 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <Facebook size={18} />
                    </a>
                    <a href="https://www.instagram.com/hacks_rider10/" className="bg-gray-100 hover:bg-indigo-600 text-indigo-600 hover:text-white p-3 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>

                {/* Stats with Enhanced Animation */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-lg mt-6 md:mt-10 border border-gray-100">
                  <div
                    className="text-center hover:bg-indigo-50 p-3 md:p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
                    onClick={() => window.open('/resume_th.pdf', '_blank')}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FileText size={20} className="text-indigo-600" />
                    </div>
                    <p className="text-sm text-gray-500">Th</p>
                    <p className="text-lg md:text-xl font-semibold text-indigo-600">เรซูเม่</p>
                  </div>

                  <div
                    className="text-center hover:bg-indigo-50 p-3 md:p-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
                    onClick={() => window.open('/resume_en.pdf', '_blank')}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FileText size={20} className="text-purple-600" />
                    </div>
                    <p className="text-sm text-gray-500">En</p>
                    <p className="text-lg md:text-xl font-semibold text-purple-600">Resume</p>
                  </div>
                </div>
              </div>

              {/* About Me Section with Enhanced Styling */}
              <div className="px-6 md:px-10 mb-8 md:mb-10">
                <h2 className="text-xl md:text-2xl text-gray-800 mb-4 md:mb-5 flex items-center font-semibold">
                  <User className="mr-3 text-indigo-500" size={22} />
                  เกี่ยวกับฉัน
                </h2>
                <div className="relative">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                  <div className="relative">
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed bg-gray-50 p-5 md:p-7 pl-7 md:pl-9 rounded-xl shadow border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      สวัสดีครับ ผมชื่อแฮ็คส์ครับ อายุ 23 ปี ผมเป็นนักพัฒนาเว็บที่มีความสนใจในการสร้างและพัฒนาเว็บไซต์ ด้วยพื้นฐานจากสาขาวิศวกรรมคอมพิวเตอร์ ผมมีความถนัดทั้งด้าน Frontend และ Backend และมีความเชี่ยวชาญในการใช้เทคโนโลยีล่าสุดอย่าง 
                      <span className="text-indigo-600 font-medium bg-indigo-50 px-1 rounded mx-0.5">React</span>, 
                      <span className="text-purple-600 font-medium bg-purple-50 px-1 rounded mx-0.5">Next.js</span> และ 
                      <span className="text-pink-600 font-medium bg-pink-50 px-1 rounded mx-0.5">TypeScript</span> 
                      รวมถึงมีประสบการณ์ฝึกงานด้าน Web Development ผมต้องการโอกาสในการทำงานเพื่อพัฒนาทักษะและเติบโตในสายงานนี้
                    </p>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-tr-xl"></div>
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
                src="/116530462027-1.jpg" 
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
                <p className="text-gray-200">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700 z-30 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
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