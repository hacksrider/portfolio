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
      company: "บริษัท เอไอซอฟต์ จำกัด",
      position: "Web Developer",
      year: "2567",
      responsibilities: [
        "หาจุดคำที่สนใจทำเว็บไซต์",
        "จัดทำเว็บไซต์ให้ลูกค้าในส่วน front end",
        "พัฒนาในส่วน back end ของบริษัท เพื่อทำให้เว็บลูกค้าสามารถจัดการเว็บไซต์เองได้",
        "ตั้งค่า domain และ นำเว็บขึ้น hosting"
      ],
      icon: <Briefcase className="text-blue-600" />,
      image: "/aosoft.jpg" // Placeholder image for experience
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
      <div className="min-h-screen py-12 px-2 md:4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center md:mb-12 mb-4">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 cursor-pointer py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === 'experience'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                ประสบการณ์ฝึกงาน
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-6 cursor-pointer py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === 'projects'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                โปรเจค
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'experience' && (
              <div className="space-y-12">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="md:p-8 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mr-4">
                            {exp.icon}
                          </div>
                          <div>
                            <button onClick={() => window.open('https://www.aosoft.co.th/', '_blank')}><h3 className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-blue-600">{exp.company}</h3></button>
                            <p className="text-lg text-blue-600">{exp.position}</p>
                          </div>
                        </div>
                        <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                          <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-blue-600 font-medium">{exp.year}</span>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="mt-6 md:w-1/2">
                          <h4 className="text-lg font-semibold text-gray-700 mb-3">หน้าที่รับผิดชอบ:</h4>
                          <ul className="space-y-3">
                            {exp.responsibilities.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 mr-3 mt-0.5 flex-shrink-0">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6 md:w-1/2">
                          <div className="flex justify-center">
                            <img 
                              src={exp.image} 
                              alt={`${exp.company} image`} 
                              className="w-[300px] h-auto object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-12">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="md:p-8 p-6">
                      <div className="flex items-center mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 mr-4">
                          {project.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">เทคโนโลยีที่ใช้:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.split(', ').map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="mt-6 md:w-1/2">
                          <h4 className="text-lg font-semibold text-gray-700 mb-3">คุณสมบัติ:</h4>
                          <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                  <ArrowRight className="w-4 h-4 text-indigo-600" />
                                </div>
                                <span className="ml-3 text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6 md:w-1/2">
                          <div className='flex justify-center'>
                            <img  
                              src={project.image} 
                              alt={`${project.title} image`} 
                              className="w-[300px] h-auto object-cover"
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