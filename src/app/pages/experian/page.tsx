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
      company: "บริษัท ไชโยไปป์ แอนด์ ฟิตติ้ง จำกัด",
      position: "Programmer R&D",
      year: "มิถุนา 2565 - ปัจจุบัน",
      responsibilities: [
        "ทดสอบและประเมินเทคโนโลยีใหม่ๆ เพื่อหาแนวทางพัฒนาผลิตภัณฑ์และปรับปรุงกระบวนการทำงานในโรงงาน",
        "ดูแลการพัฒนาโปรเจกต์ตั้งแต่ต้นจนจบ ทั้งวิเคราะห์ความต้องการ ออกแบบ database เขียน frontend/backend ไปจนถึงทำ technical documentation",
        "ออกแบบและติดตั้งระบบ IoT เพื่อเพิ่มระบบอัตโนมัติในโรงงาน และพัฒนาผลิตภัณฑ์ IoT ใหม่สำหรับขาย",
        "พัฒนาและดูแล web application ด้วย React, Laravel และ MySQL เพื่อปรับกระบวนการทำงานภายในให้รวดเร็วขึ้น",
        "วิเคราะห์ system log และ performance metric เพื่อหาต้นเหตุของปัญหาและแก้ไข",
        "จัดการ deployment บน Google Cloud Platform (GCP) และ server ภายใน เพื่อให้ระบบทำงานได้ต่อเนื่องและปลอดภัย"
      ],
      techStack: "React, Laravel, MySQL, ESP32, Modbus, Google Cloud Platform",
      icon: <Briefcase className="text-blue-600" />,
      image: "/aosoft.jpg"
    },
    {
      id: 2,
      company: "บริษัท เอโอซอฟต์ จำกัด",
      position: "Web Developer (ฝึกงาน)",
      year: "เมษา 2567 - มิถุนา 2567",
      responsibilities: [
        "คุยกับลูกค้าเพื่อรับและสรุปความต้องการ แล้วแปลงเป็นฟีเจอร์ที่จะพัฒนาในเว็บไซต์",
        "ออกแบบและพัฒนาเว็บไซต์ด้วย HTML, CSS, JavaScript ให้ตรงตามรูปแบบและเป้าหมายของลูกค้า",
        "สร้างและจัดการ database ด้วย MySQL สำหรับระบบจัดการหลังบ้าน",
        "ดูแล deployment ทั้งหมด ตั้งแต่ตั้งค่า domain ไปจนถึงอัปโหลดไฟล์ผ่าน FTP (FileZilla)"
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
      <div className="min-h-screen py-6 sm:py-8 md:py-10 px-4 sm:px-5 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-7 sm:mb-9">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">ประสบการณ์และโปรเจกต์</h1>
            <div className="h-0.5 w-14 bg-blue-600 rounded-full mt-3"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="inline-flex bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex-1 sm:flex-none px-4 sm:px-8 cursor-pointer py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 ${activeTab === 'experience'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <span className="flex items-center justify-center gap-1 sm:gap-2">
                  <Briefcase size={16} className="sm:w-5 sm:h-5" />
                  <span>ประสบการณ์</span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex-1 sm:flex-none px-4 sm:px-8 cursor-pointer py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all duration-200 ${activeTab === 'projects'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <span className="flex items-center justify-center gap-1 sm:gap-2">
                  <Code size={16} className="sm:w-5 sm:h-5" />
                  โปรเจกต์
                </span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div>
            {activeTab === 'experience' && (
              <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Card top accent */}
                    <div className="h-1 bg-blue-600"></div>

                    <div className="p-5 sm:p-6 md:p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center">
                            <div className="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-white">
                              {exp.icon}
                            </div>
                          </div>
                          <div>
                            <button onClick={() => exp.id === 2 && window.open('https://www.aosoft.co.th/', '_blank')}>
                              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 hover:text-blue-700 transition-colors leading-tight text-left">
                                {exp.company}
                              </h3>
                            </button>
                            <p className="text-sm font-semibold text-blue-600 mt-0.5">{exp.position}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 self-start sm:self-auto shrink-0">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          <span className="text-gray-600 font-medium text-xs sm:text-sm whitespace-nowrap">{exp.year}</span>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      {exp.techStack && (
                        <div className="mb-5">
                          <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                            <div className="w-1 h-4 bg-teal-500 rounded-full"></div>
                            เทคโนโลยีที่ใช้
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.techStack.split(', ').map((tech, index) => (
                              <span
                                key={index}
                                className="px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-lg text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                          <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                          หน้าที่รับผิดชอบ
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start gap-2.5">
                              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold mt-0.5">
                                {index + 1}
                              </span>
                              <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6 max-w-4xl mx-auto">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-1 bg-teal-600"></div>

                    <div className="p-5 sm:p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-5">
                        <div className="flex-shrink-0 w-11 h-11 bg-teal-600 rounded-xl flex items-center justify-center">
                          <div className="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-white">
                            {project.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-5">
                        <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                          <div className="w-1 h-4 bg-teal-500 rounded-full"></div>
                          เทคโนโลยีที่ใช้
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.split(', ').map((tech, index) => (
                            <span
                              key={index}
                              className="px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-lg text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features + Image */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                            <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                            ฟีเจอร์หลัก
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2.5">
                                <div className="flex-shrink-0 mt-0.5 w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center">
                                  <ArrowRight className="w-3 h-3 text-blue-600" />
                                </div>
                                <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-center">
                          <img
                            src={project.image}
                            alt={`${project.title} image`}
                            className="w-full max-w-sm mx-auto h-auto object-cover rounded-xl border border-gray-200 shadow-sm"
                          />
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