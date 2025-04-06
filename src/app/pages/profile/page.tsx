"use client"
import React, { useState, useEffect } from 'react'
import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import { User, Github, Mail, Phone, MapPin, FileText , ChevronUp, Facebook, Instagram } from 'lucide-react'

function Profile() {
  const [scrolled, setScrolled] = useState(false);
  const [animateAvatar, setAnimateAvatar] = useState(false);

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

  return (
    <MainLayout>
      <div className="flex h-screen overflow-hidden">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Content */}
          <div className="pt-6 pb-16 px-4 max-w-6xl mx-auto">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
              {/* Hero Background with Animated Gradient */}
              <div className="h-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 relative bg-[length:200%_100%] animate-gradient">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-8 -mt-20 relative mb-8">
                {/* Avatar with Animation */}
                <div className={`w-36 h-36 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white transition-all duration-700 ${animateAvatar ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
                  <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-600 opacity-80"></div>
                    <Image src="/116530462027-1.jpg" alt="Avatar" width={100} height={100} className="relative z-10 w-full h-full object-cover rounded-full" />
                  </div>
                </div>

                {/* Name & Title with Animation */}
                <div className="text-center md:text-left flex-1 mt-6 md:mt-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-1 animate-fadeIn">เกียรติภูมิ โภคา (แฮ็คส์)</h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto md:mx-0 mb-3"></div>
                  <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 font-medium mb-3">Web Developer</p>

                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4 justify-center md:justify-start">
                    <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full hover:bg-indigo-50 transition-colors duration-300">
                      <Mail size={16} className="mr-2 text-indigo-500" />
                      kriattiphum.p@gmail.com
                    </div>
                    <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full hover:bg-indigo-50 transition-colors duration-300">
                      <Phone size={16} className="mr-2 text-indigo-500" />
                      098-1586900
                    </div>
                    <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full hover:bg-indigo-50 transition-colors duration-300">
                      <MapPin size={16} className="mr-2 text-indigo-500" />
                      สกลนคร, ประเทศไทย
                    </div>
                  </div>

                  {/* Social Links with Hover Effects */}
                  <div className="flex gap-3 justify-center md:justify-start">
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
                <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-md mt-8 md:mt-8 border border-gray-100">
                  <div
                    className="text-center hover:bg-indigo-50 p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
                    onClick={() => window.open('/resume_th.pdf', '_blank')}
                  >
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FileText size={18} className="text-indigo-600" />
                    </div>
                    <p className="text-sm text-gray-500">Th</p>
                    <p className="text-lg font-semibold text-indigo-600">เรซูเม่</p>
                  </div>

                  <div
                    className="text-center hover:bg-indigo-50 p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
                    onClick={() => window.open('/resume_en.pdf', '_blank')}
                  >
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FileText size={18} className="text-purple-600" />
                    </div>
                    <p className="text-sm text-gray-500">En</p>
                    <p className="text-lg font-semibold text-purple-600">Resume</p>
                  </div>
                </div>
              </div>

              {/* About Me Section with Enhanced Styling */}
              <div className="px-8 mb-6">
                <h2 className="text-xl text-gray-800 mb-4 flex items-center font-semibold">
                  <User className="mr-2 text-indigo-500" size={20} />
                  เกี่ยวกับฉัน
                </h2>
                <div className="relative">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                  <p className="text-gray-600 leading-relaxed bg-gray-50 p-6 pl-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    สวัสดีครับ ผมชื่อแฮ็คส์ครับ อายุ 23 ปี ผมเป็นนักพัฒนาเว็บที่มีความสนใจในการสร้างและพัฒนาเว็บไซต์ ด้วยพื้นฐานจากสาขาวิศวกรรมคอมพิวเตอร์ ผมมีความถนัดทั้งด้าน Frontend และ Backend และมีความเชี่ยวชาญในการใช้เทคโนโลยีล่าสุดอย่าง <span className="text-indigo-600 font-medium">React</span>, <span className="text-purple-600 font-medium">Next.js</span> และ <span className="text-pink-600 font-medium">TypeScript</span> รวมถึงมีประสบการณ์ฝึกงานด้าน Web Development ผมต้องการโอกาสในการทำงานเพื่อพัฒนาทักษะและเติบโตในสายงานนี้
                  </p>
                  {/* <p className="text-gray-600 leading-relaxed bg-gray-50 p-6 pl-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    สวัสดีครับ ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและใช้งานง่าย
                    มีความเชี่ยวชาญในการใช้เทคโนโลยีล่าสุดอย่าง <span className="text-indigo-600 font-medium">React</span>, <span className="text-purple-600 font-medium">Next.js</span> และ <span className="text-pink-600 font-medium">TypeScript</span>
                    ชอบเรียนรู้สิ่งใหม่ๆ และแก้ไขปัญหาที่ท้าทาย เป้าหมายของผมคือการพัฒนาซอฟต์แวร์ที่สร้างผลกระทบเชิงบวกต่อผู้ใช้และสังคม
                  </p> */}
                </div>
              </div>

              {/* Footer with Animation
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                <div className="text-center text-gray-500 text-sm">
                  <p>&copy; {new Date().getFullYear()} สมชาย รักเรียน | นักพัฒนาซอฟต์แวร์</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
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
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </MainLayout>
  )
}

export default Profile