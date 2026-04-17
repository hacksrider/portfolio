/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import MainLayout from '@/components/MainLayout'
import { ExternalLink, Github, Images, X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  images: string[]
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

function Portfolio() {
  const [galleryProject, setGalleryProject] = useState<Project | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "เว็บระบบคำนวณอุปกรณ์ระบบน้ำ CIPS",
      description: "เป็นเว็บระบบคำนวณอุปกรณ์ระบบน้ำ รวมไปถึงการคำนวณอุปกรณ์ระบบน้ำ",
      image: "/cips1.png",
      images: ["/cips1.png", "/cips2.png", "/cips3.png", "/cips4.png", "/cips5.png", "/cips6.png", "/cips7.png", "/cips8.png", "/cips9.png"],
      tags: ["React.JS","Laravel", "Javascript", "Php", "Tailwind CSS", "MySQL", "Google Cloud Platform"],
      demoUrl: "https://chaiyopipeandfitting.com/",
      featured: true
    },
    {
      id: 2,
      title: "เว็บไซต์จำหน่ายสวิทชิ่งโมดิฟาย",
      description: "เป็นเว็บที่ จำหน่ายสวิทชิ่งโมดิฟาย โดยมีหน้าแสดงสินค้าและรายละเอียดสินค้า",
      image: "/swiching1.png",
      images: ["/swiching1.png", "/swiching2.png", "/swiching3.png", "/swiching4.png", "/swiching5.png", "/swiching6.png"],
      tags: ["Html", "Css", "Javascript", "Php", "MySql"],
      demoUrl: "https://xn--72cf5aj7bkj7a0a1gpcd7qkd.com/",
      featured: false
    },
    {
      id: 3,
      title: "สำนักงานกฎหมายสุวินทวงศ์",
      description: "บริการจดทะเบียนจัดตั้งนิติบุคคล จดทะเบียนเปลี่ยนแปลง บริการรับทำบัญชี ตรวจสอบบัญชีและบริการให้คำปรึกษาทางด้านกฎหมาย บัญชี ภาษีอากร",
      image: "/suwin1.png",
      images: ["/suwin1.png", "/suwin2.png", "/suwin3.png", "/suwin4.png", "/suwin5.png"],
      tags: ["Html", "Css", "Javascript", "Php", "MySql"],
      demoUrl: "https://www.suwintawongaccounting.com/index.php",
      featured: true
    },
    {
      id: 4,
      title: "ระบบจัดการจองสนามสนามฟุตบอลและซื้อบริการออกกำลังกาย",
      description: "เป็นระบบจองสนามฟุตบอลออนไลน์ และซื้อบริการออกกำลังกาย",
      image: "/usport.jpg",
      images: ["/usport.jpg"],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "MySql"],
      githubUrl: "https://github.com/hacksrider/project_usport",
      featured: false
    },
    {
      id: 5,
      title: "เว็บให้บริการเช่าผ้าดำไฟดาว",
      description: "ให้บริการ ในงานติดตั้ง และรื้อถอนผ้าดำ ผ้าดำไฟดาว ผ้าขาวไฟดาว ม่านดำบังแสง ผ้าดำคอนเสิร์ต ผ้าดาวงานแต่ง ให้บริการทั่วประเทศ",
      image: "/star1.png",
      images: ["/star1.png", "/star2.png", "/star3.png", "/star4.png", "/star5.png"],
      tags: ["Html", "Css", "Javascript", "Php", "MySql"],
      demoUrl: "https://xn--b3cux1gbb6gzcl6b.com/",
      featured: false
    },
    {
      id: 6,
      title: "เว็บให้บริการรถสองแถว",
      description: "เป็นเว็บไซต์ที่ให้เช่ารถสองแถวใหญ่ สองแถว 6 ล้อ บริการรับส่งพนักงาน รับเช่าเหมาเที่ยว หรืองานต่างๆ รวดเร็วปลอดภัย ตรงเวลา ถูกกฎหมาย",
      image: "/car1.png",
      images: ["/car1.png", "/car2.png", "/car3.png", "/car4.png", "/car5.png", "/car6.png", "/car7.png"],
      tags: ["Html", "Css", "Javascript", "Php"],
      demoUrl: "https://www.xn--12cfiacc0hblwfp0hdf1df9b5co7eefpgb59aia2hsf0a.com/",
      featured: false
    },
    {
      id: 7,
      title: "เว็บบริการจัดทำเว็บไซต์",
      description: "เป็นเว็บที่ให้บริการ การจัดทำเว็บเพจ เว็บไซต์ขนาดเล็ก สำหรับบริษัท องกรณ์ หรือธุรกิจส่วนบุคคล ขนาดเล็ก",
      image: "/web.png",
      images: ["/web.png"],
      tags: ["Html","JavaScript", "CSS",],
      demoUrl: "https://www.hacksdev.com/",
      featured: false
    },
    {
      id: 8,
      title: "เว็บ Portfolio",
      description: "เป็นเว็บ Portfolio แสดงข้อมูลส่วนตัวต่างๆ รวมไปถึงผลงานของ นายเกียรติภูมิ โภคา (แฮ็คส์)",
      image: "/port.png",
      images: ["/port1.png", "/port2.png", "/port3.png", "/port4.png", "/port5.png", "/port6.png", "/port7.png", "/port8.png"],
      tags: ["Next.JS","TypeScript", "Html", "Tailwind CSS"],
      demoUrl: "http://localhost:3000/pages/profile",
      featured: false
    },
    
    {
      id: 9,
      title: "เว็บรวบรวมปัญหาในโรงงาน",
      description: "เป็นเว็บรวบรวมปัญหาในโรงงาน พร้อมบอกวิธรีการแก้ไข",
      image: "/EM1.png",
      images: ["/EM1.png", "/EM2.png", "/EM3.png", "/EM4.png", "/EM5.png"],
      tags: ["React.JS","Laravel", "Javascript", "Php", "Tailwind CSS", "MySQL", "Google Cloud Platform"],
      featured: false
    }
  ]

  const openGallery = (project: Project) => {
    setGalleryProject(project)
    setLightboxIndex(null)
  }

  const closeGallery = () => {
    setGalleryProject(null)
    setLightboxIndex(null)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const prevImage = () => {
    if (galleryProject && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryProject.images.length) % galleryProject.images.length)
    }
  }

  const nextImage = () => {
    if (galleryProject && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryProject.images.length)
    }
  }

  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
            
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  My Portfolio
                </span>
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto shadow-lg mb-4"></div>
              <p className="text-lg text-gray-600 font-medium">
                รวมผลงานและโครงการที่น่าสนใจ
              </p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {projects.filter(project => project.featured).map((project, idx) => (
                <div 
                  key={project.id} 
                  className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-indigo-300/50 hover:-translate-y-3 hover:scale-[1.02]"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 rounded-2xl text-white font-semibold shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-110 transition-all duration-300"
                        >
                          <ExternalLink size={18} />
                          <span>ดูเว็บไซต์</span>
                        </a>
                      )}
                      <button
                        onClick={() => openGallery(project)}
                        className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 rounded-2xl text-white font-semibold shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-110 transition-all duration-300"
                      >
                        <Images size={18} />
                        <span>ดูรูปภาพ</span>
                      </button>
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-white font-bold text-sm shadow-lg">
                      ⭐ Featured
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="relative z-10 p-8">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5 font-medium">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => openGallery(project)}
                      className="flex items-center gap-2 mt-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-md hover:shadow-emerald-400/50 hover:scale-105 transition-all duration-300"
                    >
                      <Images size={18} />
                      ดูรูปภาพ ({project.images.length})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                All Projects
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div 
                  key={project.id} 
                  className="group relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/30 hover:-translate-y-2"
                  style={{animationDelay: `${idx * 0.05}s`}}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Image Section */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                    
                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
                          title="ดูเว็บไซต์"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-xl text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
                          title="ดู GitHub"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      <button
                        onClick={() => openGallery(project)}
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-xl text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
                        title="ดูรูปภาพ"
                      >
                        <Images size={20} />
                      </button>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="relative z-10 p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4 font-medium">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold rounded-lg border border-purple-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs bg-gray-100 text-gray-600 font-semibold rounded-lg">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => openGallery(project)}
                      className="w-full flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-xl shadow hover:shadow-emerald-400/40 hover:scale-105 transition-all duration-300"
                    >
                      <Images size={16} />
                      ดูรูปภาพ ({project.images.length})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {galleryProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
          onClick={closeGallery}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-gray-100 rounded-t-3xl">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                  {galleryProject.title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">{galleryProject.images.length} รูปภาพ</p>
              </div>
              <button
                onClick={closeGallery}
                className="p-2 rounded-xl bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-600 transition-all duration-200"
              >
                <X size={22} />
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {galleryProject.images.map((img, index) => (
                <div
                  key={index}
                  className="relative group aspect-video rounded-2xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img}
                    alt={`${galleryProject.title} รูปที่ ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                      ขยายดู
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {galleryProject && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 60 }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            <X size={26} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur">
            {lightboxIndex + 1} / {galleryProject.images.length}
          </div>

          {/* Prev */}
          {galleryProject.images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-white/10 hover:bg-white/25 text-white transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* Image */}
          <div className="relative max-w-5xl w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img
              src={galleryProject.images[lightboxIndex]}
              alt={`${galleryProject.title} รูปที่ ${lightboxIndex + 1}`}
              className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl object-contain"
            />
          </div>

          {/* Next */}
          {galleryProject.images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-2xl bg-white/10 hover:bg-white/25 text-white transition-all duration-200 hover:scale-110"
            >
              <ChevronRight size={30} />
            </button>
          )}

          {/* Thumbnail strip */}
          {galleryProject.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryProject.images.map((img, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setLightboxIndex(i) }}
                  className={`w-12 h-8 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === lightboxIndex ? 'border-white scale-110' : 'border-white/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </MainLayout>
  )
}

export default Portfolio
