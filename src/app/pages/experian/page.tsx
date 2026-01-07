/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import { Calendar, Code, Briefcase, ArrowRight } from 'lucide-react';

function ExperienceAndProjects() {
  const [activeTab, setActiveTab] = useState('experience');

  // Work Experience Data
  const experiences = [
    {
      id: 1,
      company: "บริษัท ชัยโยไปป์ แอนด์ ฟิตติ้ง จำกัด",
      position: "R&D Engineer",
      year: "มิถุนายน 2568 - ปัจจุบัน",
      responsibilities: [
        "พัฒนาและดูแลเว็บแอปพลิเคชันแบบเต็มวงจรโดยใช้ React, Laravel และ MySQL เพื่อสนับสนุนการดำเนินงานภายใน",
        "วิเคราะห์ระบบ log และข้อมูลประสิทธิภาพเพื่อระบุสาเหตุของปัญหาทางเทคนิคและนำเสนอวิธีแก้ไขที่มีประสิทธิภาพ",
        "ร่วมมือกับทีมข้ามสายงานเพื่อแปลงแนวคิดนวัตกรรมเป็น MVP ที่ใช้งานได้จริงโดยใช้ Website และ IoT (Arduino)",
        "จัดการการ deploy แบบ end-to-end บน Cloud (GCP) และเซิร์ฟเวอร์ On-premise เพื่อให้มั่นใจในความปลอดภัยและเสถียรภาพของระบบ"
      ],
      techStack: "React, Tailwind CSS, Laravel, MySQL, Arduino IDE, Google Cloud Platform",
      icon: <Briefcase className="text-blue-600" />,
      image: "/aosoft.jpg"
    },
    {
      id: 2,
      company: "บริษัท เอโอซอฟต์ จำกัด",
      position: "Internship",
      year: "เมษายน 2567 - มิถุนายน 2567",
      responsibilities: [
        "รวบรวมความต้องการของลูกค้าและพัฒนา อัปเดต และ deploy เว็บไซต์ตั้งแต่ต้นจนจบ",
        "พัฒนาเว็บไซต์โดยใช้ HTML, CSS, JavaScript, MySQL และ FileZilla"
      ],
      techStack: "HTML, CSS, JavaScript, MySQL, FileZilla",
      icon: <Briefcase className="text-blue-600" />,
      image: "/aosoft.jpg"
    }
  ];

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "ระบบจัดการจองสนามฟุตบอลและบริการออกกำลังกาย",
      technologies: "Next.js, TypeScript, TailwindCSS, Prisma ORM, MySQL",
      features: [
        "มีระบบ ล็อกอินสำหรับลูกค้าและแอดมิน",
        "ลูกค้าสามารถเลือกวันและเวลาของสนามฟุตบอล และทำการจองออนไลน์ได้",
        "ลูกค้าสามารถเลือกซื้อบริการออกกำลังกาย ตามวันที่ต้องการใช้งานได้",
        "แอดมินสามารถจัดการระบบ และตรวจสอบคำสั่งจองได้"
      ],
      icon: <Code className="text-indigo-600" />,
      image: "/usport.jpg" // Placeholder image for project
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-lg p-1 sm:p-1.5 shadow-lg sm:shadow-xl border border-white/20 w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex-1 sm:flex-none px-3 sm:px-6 md:px-8 cursor-pointer py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${activeTab === 'experience'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-300/50 scale-105'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-white/50'
                  }`}
              >
                <span className="flex items-center justify-center gap-1 sm:gap-2">
                  <Briefcase size={16} className="sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">ประสบการณ์การทำงาน</span>
                  <span className="xs:hidden">ประสบการณ์</span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex-1 sm:flex-none px-3 sm:px-6 md:px-8 cursor-pointer py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${activeTab === 'projects'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-300/50 scale-105'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-white/50'
                  }`}
              >
                <span className="flex items-center justify-center gap-1 sm:gap-2">
                  <Code size={16} className="sm:w-5 sm:h-5" />
                  โปรเจค
                </span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'experience' && (
              <div className="relative">
                {/* Timeline vertical line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>
                
                <div className="space-y-8 sm:space-y-12 md:space-y-16">
                  {experiences.map((exp, idx) => (
                    <div
                      key={exp.id}
                      className={`relative ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-1/2'}`}
                    >
                      {/* Timeline dot */}
                      <div className="hidden md:flex absolute top-8 left-1/2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-ping opacity-75"></div>
                      </div>
                      
                      {/* Experience Card */}
                      <div className="group relative bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-indigo-200/50 hover:scale-[1.01] sm:hover:scale-[1.02]">
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 right-0 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-2xl sm:blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-0"></div>
                        
                        <div className="relative z-10 p-4 sm:p-5 md:p-6 lg:p-8">
                          {/* Header */}
                          <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                            <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <div className="[&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                                  {exp.icon}
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <button onClick={() => exp.id === 2 && window.open('https://www.aosoft.co.th/', '_blank')}>
                                  <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:from-indigo-700 hover:to-purple-700 transition-all leading-tight">
                                    {exp.company}
                                  </h3>
                                </button>
                                <p className="text-sm sm:text-base md:text-lg font-semibold text-indigo-600 mt-0.5 sm:mt-1">{exp.position}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl border border-indigo-100 shadow-sm sm:shadow-md self-start">
                              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-indigo-600 flex-shrink-0" />
                              <span className="text-indigo-700 font-semibold text-[10px] sm:text-xs md:text-sm whitespace-nowrap">{exp.year}</span>
                            </div>
                          </div>

                          {/* Tech Stack */}
                          {exp.techStack && (
                            <div className="mb-4 sm:mb-5 md:mb-6">
                              <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                                <div className="w-0.5 sm:w-1 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                                เทคโนโลยีที่ใช้
                              </h4>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {exp.techStack.split(', ').map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-semibold shadow-sm sm:shadow-md hover:shadow-md sm:hover:shadow-lg hover:scale-105 transition-all duration-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                              <div className="w-0.5 sm:w-1 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                              หน้าที่รับผิดชอบ
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                              {exp.responsibilities.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 sm:gap-3 group/item">
                                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs sm:text-sm font-bold shadow-sm sm:shadow-md group-hover/item:scale-110 transition-transform duration-300">
                                    {index + 1}
                                  </span>
                                  <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed pt-0.5 sm:pt-1 font-medium">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                {projects.map((project, idx) => (
                  <div
                    key={project.id}
                    className="group relative bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-purple-200/50 hover:scale-[1.01] sm:hover:scale-[1.02]"
                    style={{animationDelay: `${idx * 0.1}s`}}
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 left-0 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-2xl sm:blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 p-4 sm:p-5 md:p-6 lg:p-8">
                      {/* Header */}
                      <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          <div className="[&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                            {project.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4 sm:mb-5 md:mb-6">
                        <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                          <div className="w-0.5 sm:w-1 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                          เทคโนโลยีที่ใช้
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.technologies.split(', ').map((tech, index) => (
                            <span
                              key={index}
                              className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-semibold shadow-sm sm:shadow-md hover:shadow-md sm:hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        <div>
                          <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                            <div className="w-0.5 sm:w-1 h-4 sm:h-5 md:h-6 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full"></div>
                            คุณสมบัติ
                          </h4>
                          <ul className="space-y-2 sm:space-y-3">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2 sm:gap-3 group/item">
                                <div className="flex-shrink-0 mt-0.5 sm:mt-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md sm:rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                </div>
                                <span className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Project Image */}
                        <div className="flex items-center justify-center mt-4 md:mt-0">
                          <div className="relative group/img w-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl blur-md sm:blur-lg opacity-50 group-hover/img:opacity-75 transition-opacity duration-300"></div>
                            <img  
                              src={project.image} 
                              alt={`${project.title} image`} 
                              className="relative w-full max-w-sm mx-auto h-auto object-cover rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border-2 sm:border-4 border-white group-hover/img:scale-105 transition-transform duration-500"
                            />
                          </div>
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
    </MainLayout>
  );
}

export default ExperienceAndProjects;