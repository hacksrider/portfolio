/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import MainLayout from '@/components/MainLayout'
import { VscCode } from 'react-icons/vsc'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaDatabase, FaGithub, FaMicrosoft, FaFigma, FaPython, FaJava,
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTypescript, SiTailwindcss,
  SiPostman, SiCanva, SiArduino, SiLaravel
} from 'react-icons/si'

function Skill() {
  const [activeTab, setActiveTab] = useState('skills')
  const FileZilla = "/FileZilla_logo.svg"
  const Autocad = "/Autocad_logo.png"
  const Solidworks = "/Solidworks_logo.jpg"
  const Proteus = "/Proteus_logo.jpg"
  const Cursor = "/Cursor_logo.png"

  const skills = [
    { name: 'Python', level: 'Advanced', color: 'text-orange-500', percentage: 90, icon: <FaPython className="text-6xl text-blue-500" /> },
    { name: 'JavaScript', level: 'Intermediate', color: 'text-green-500', percentage: 75, icon: <FaJs className="text-6xl text-yellow-500" /> },
    { name: 'React.JS', level: 'Intermediate', color: 'text-green-500', percentage: 75, icon: <FaReact className="text-6xl text-blue-400" /> },
    { name: 'Next.JS', level: 'Intermediate', color: 'text-green-500', percentage: 75, icon: <SiNextdotjs className="text-6xl text-black" /> },
    { name: 'PHP (Laravel)', level: 'Intermediate', color: 'text-green-500', percentage: 70, icon: <SiLaravel className="text-6xl text-red-600" /> },
    { name: 'SQL', level: 'Intermediate', color: 'text-green-500', percentage: 70, icon: <FaDatabase className="text-6xl text-blue-800" /> },
    { name: 'MySQL', level: 'Intermediate', color: 'text-green-500', percentage: 70, icon: <FaDatabase className="text-6xl text-blue-800" /> },
    { name: 'TypeScript', level: 'Intermediate', color: 'text-green-500', percentage: 65, icon: <SiTypescript className="text-6xl text-blue-700" /> },
    { name: 'TailwindCSS', level: 'Intermediate', color: 'text-green-500', percentage: 75, icon: <SiTailwindcss className="text-6xl text-teal-500" /> },
    { name: 'Java', level: 'Beginner', color: 'text-blue-500', percentage: 40, icon: <FaJava className="text-6xl text-orange-600" /> },
    { name: 'Arduino IDE', level: 'Intermediate', color: 'text-green-500', percentage: 65, icon: <SiArduino className="text-6xl text-teal-600" /> },
    { name: 'HTML', level: 'Advanced', color: 'text-orange-500', percentage: 85, icon: <FaHtml5 className="text-6xl text-orange-600" /> },
    { name: 'CSS', level: 'Intermediate', color: 'text-green-500', percentage: 70, icon: <FaCss3Alt className="text-6xl text-blue-600" /> }
  ]

  const programs = [
    { name: 'Visual Studio Code', level: 'Advanced', color: 'text-orange-500', percentage: 85, icon: <VscCode className="text-6xl text-blue-500" /> },
    { name: 'Cursor', level: 'Advanced', color: 'text-orange-500', percentage: 85, icon: <img src={Cursor} alt="Cursor" className="w-14 h-14 text-6xl text-purple-500" /> },
    { name: 'Git Version Control', level: 'Intermediate', color: 'text-green-500', percentage: 75, icon: <FaGithub className="text-6xl text-gray-800" /> },
    { name: 'Postman', level: 'Intermediate', color: 'text-green-500', percentage: 70, icon: <SiPostman className="text-6xl text-orange-500" /> },
    { name: 'SolidWorks', level: 'Intermediate', color: 'text-green-500', percentage: 65, icon: <img src={Solidworks} alt="SolidWorks" className="w-14 h-14 text-6xl text-purple-500" /> },
    { name: 'AutoCAD', level: 'Intermediate', color: 'text-green-500', percentage: 65, icon: <img src={Autocad} alt="AutoCAD" className="w-14 h-14 text-6xl text-purple-500" /> },
    { name: 'Proteus', level: 'Intermediate', color: 'text-green-500', percentage: 60, icon: <img src={Proteus} alt="Proteus" className="w-14 h-14 text-6xl text-purple-500" /> },
    { name: 'IoT', level: 'Intermediate', color: 'text-green-500', percentage: 65, icon: <SiArduino className="text-6xl text-teal-600" /> },
    { name: 'FileZilla', level: 'Intermediate', color: 'text-green-500', percentage: 60, icon: <img src={FileZilla} alt="FileZilla" className="w-14 h-14 text-6xl text-purple-500" /> },
    { name: 'Microsoft 365', level: 'Intermediate', color: 'text-green-500', percentage: 70, icon: <FaMicrosoft className="text-6xl text-blue-600" /> },
    { name: 'Canva', level: 'Intermediate', color: 'text-green-500', percentage: 65, icon: <SiCanva className="text-6xl text-blue-400" /> },
    { name: 'Figma', level: 'Beginner', color: 'text-blue-500', percentage: 45, icon: <FaFigma className="text-6xl text-purple-500" /> },
  ]

  const getLevelColor = (level: string) => {
    if (level === 'Advanced') return 'bg-gradient-to-r from-orange-400 to-orange-600'
    if (level === 'Intermediate') return 'bg-gradient-to-r from-green-400 to-green-600'
    return 'bg-gradient-to-r from-blue-400 to-blue-600'
  }

  const getAnimationDelay = (index: number) => {
    return `${index * 0.1}s`
  }

  return (
    <MainLayout>
      <div className="min-h-screen flex flex-col p-3 sm:p-4 md:p-8 pt-16 sm:pt-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-6xl w-full mx-auto bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-10 flex-grow flex flex-col overflow-hidden border border-white/20">

          {/* Tabs */}
          <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-1 sm:p-1.5 md:p-2 rounded-xl sm:rounded-2xl">
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-bold text-xs sm:text-sm md:text-base rounded-lg sm:rounded-xl transition-all duration-300 cursor-pointer ${activeTab === 'skills'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-300/50 scale-105'
                : 'text-gray-600 hover:text-indigo-600 hover:bg-white/50'
                }`}
            >
              <span className="flex items-center justify-center gap-1 sm:gap-2">
                💻 <span className="hidden xs:inline">SKILLS</span><span className="xs:hidden">Skills</span>
              </span>
            </button>
            <button
              onClick={() => setActiveTab('programs')}
              className={`flex-1 px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-bold text-xs sm:text-sm md:text-base rounded-lg sm:rounded-xl transition-all duration-300 cursor-pointer ${activeTab === 'programs'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-300/50 scale-105'
                : 'text-gray-600 hover:text-indigo-600 hover:bg-white/50'
                }`}
            >
              <span className="flex items-center justify-center gap-1 sm:gap-2">
                🛠️ <span className="hidden xs:inline">TOOLS</span><span className="xs:hidden">Tools</span>
              </span>
            </button>
          </div>

          {/* Content Container */}
          <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
            {/* Skills Section */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-indigo-50/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 border border-indigo-100/50 overflow-hidden"
                    style={{
                      animationDelay: getAnimationDelay(index),
                      animation: 'fadeIn 0.5s ease-in-out forwards'
                    }}
                  >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-xl sm:blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex items-start gap-2 sm:gap-3 md:gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 bg-gradient-to-br from-white to-indigo-50 p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md group-hover:shadow-lg sm:group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border border-indigo-100">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center [&>svg]:!w-full [&>svg]:!h-full">
                          {skill.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className='flex-1 min-w-0'>
                        <div className="flex justify-between items-start mb-2 sm:mb-3 gap-2">
                          <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 group-hover:text-indigo-700 transition-colors truncate">
                            {skill.name}
                          </h3>
                          <span className={`${skill.color} font-semibold px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs bg-white shadow-sm sm:shadow-md border border-gray-100 whitespace-nowrap flex-shrink-0`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="relative w-full bg-gray-200/50 rounded-full h-2 sm:h-2.5 md:h-3 mb-1 sm:mb-2 overflow-hidden shadow-inner">
                          <div
                            className={`h-full rounded-full ${getLevelColor(skill.level)} relative overflow-hidden transition-all duration-1000 ease-out shadow-md sm:shadow-lg`}
                            style={{ width: `${skill.percentage}%`, animationDelay: getAnimationDelay(index) }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Progress</span>
                          <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Programs Section */}
            {activeTab === 'programs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-purple-50/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 border border-purple-100/50 overflow-hidden"
                    style={{
                      animationDelay: getAnimationDelay(index),
                      animation: 'fadeIn 0.5s ease-in-out forwards'
                    }}
                  >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-xl sm:blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex items-start gap-2 sm:gap-3 md:gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 bg-gradient-to-br from-white to-purple-50 p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md group-hover:shadow-lg sm:group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border border-purple-100">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center [&>svg]:!w-full [&>svg]:!h-full [&>img]:!w-full [&>img]:!h-full">
                          {program.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className='flex-1 min-w-0'>
                        <div className="flex justify-between items-start mb-2 sm:mb-3 gap-2">
                          <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800 group-hover:text-purple-700 transition-colors truncate">
                            {program.name}
                          </h3>
                          <span className={`${program.color} font-semibold px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs bg-white shadow-sm sm:shadow-md border border-gray-100 whitespace-nowrap flex-shrink-0`}>
                            {program.level}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="relative w-full bg-gray-200/50 rounded-full h-2 sm:h-2.5 md:h-3 mb-1 sm:mb-2 overflow-hidden shadow-inner">
                          <div
                            className={`h-full rounded-full ${getLevelColor(program.level)} relative overflow-hidden transition-all duration-1000 ease-out shadow-md sm:shadow-lg`}
                            style={{ width: `${program.percentage}%`, animationDelay: getAnimationDelay(index) }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Progress</span>
                          <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {program.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.5);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
        }
      `}</style>
    </MainLayout>
  )
}

export default Skill