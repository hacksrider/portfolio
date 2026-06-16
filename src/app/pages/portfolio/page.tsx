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
      description: "ระบบคำนวณอุปกรณ์ระบบน้ำสำหรับโรงงาน รองรับการคำนวณท่อ ข้อต่อ และอุปกรณ์ต่างๆ",
      image: "/cips1.png",
      images: ["/cips1.png", "/cips2.png", "/cips3.png", "/cips4.png", "/cips5.png", "/cips6.png", "/cips7.png", "/cips8.png", "/cips9.png"],
      tags: ["React.JS", "Laravel", "JavaScript", "PHP", "Tailwind CSS", "MySQL", "GCP"],
      demoUrl: "https://chaiyopipeandfitting.com/",
      featured: true
    },
    {
      id: 2,
      title: "เว็บไซต์จำหน่ายสวิทชิ่งโมดิฟาย",
      description: "เว็บไซต์แสดงและจำหน่ายสวิทชิ่งโมดิฟาย พร้อมหน้ารายละเอียดสินค้า",
      image: "/swiching1.png",
      images: ["/swiching1.png", "/swiching2.png", "/swiching3.png", "/swiching4.png", "/swiching5.png", "/swiching6.png"],
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoUrl: "https://xn--72cf5aj7bkj7a0a1gpcd7qkd.com/",
      featured: false
    },
    {
      id: 3,
      title: "สำนักงานกฎหมายสุวินทวงศ์",
      description: "เว็บสำนักงานบัญชีและกฎหมาย รับจดทะเบียนนิติบุคคล ทำบัญชี และให้คำปรึกษาภาษีอากร",
      image: "/suwin1.png",
      images: ["/suwin1.png", "/suwin2.png", "/suwin3.png", "/suwin4.png", "/suwin5.png"],
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoUrl: "https://www.suwintawongaccounting.com/index.php",
      featured: true
    },
    {
      id: 4,
      title: "ระบบจัดการจองสนามฟุตบอลและซื้อบริการออกกำลังกาย",
      description: "ระบบจองสนามฟุตบอลออนไลน์ ซื้อบริการออกกำลังกาย และ dashboard สำหรับแอดมิน",
      image: "/usport.jpg",
      images: ["/usport.jpg"],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"],
      githubUrl: "https://github.com/hacksrider/project_usport",
      featured: false
    },
    {
      id: 5,
      title: "เว็บให้บริการเช่าผ้าดำไฟดาว",
      description: "ให้บริการติดตั้งและรื้อถอนผ้าดำ ผ้าดำไฟดาว ม่านดำบังแสง สำหรับงานต่างๆ ทั่วประเทศ",
      image: "/star1.png",
      images: ["/star1.png", "/star2.png", "/star3.png", "/star4.png", "/star5.png"],
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoUrl: "https://xn--b3cux1gbb6gzcl6b.com/",
      featured: false
    },
    {
      id: 6,
      title: "เว็บให้บริการรถสองแถว",
      description: "เว็บให้เช่ารถสองแถว 6 ล้อ รับส่งพนักงาน เหมาเที่ยว รวดเร็ว ตรงเวลา ถูกกฎหมาย",
      image: "/car1.png",
      images: ["/car1.png", "/car2.png", "/car3.png", "/car4.png", "/car5.png", "/car6.png", "/car7.png"],
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      demoUrl: "https://www.xn--12cfiacc0hblwfp0hdf1df9b5co7eefpgb59aia2hsf0a.com/",
      featured: false
    },
    {
      id: 7,
      title: "เว็บบริการจัดทำเว็บไซต์",
      description: "รับพัฒนาเว็บเพจและเว็บไซต์ขนาดเล็ก สำหรับบริษัท องค์กร หรือธุรกิจส่วนบุคคล",
      image: "/web.png",
      images: ["/web.png"],
      tags: ["HTML", "JavaScript", "CSS"],
      demoUrl: "https://www.hacksdev.com/",
      featured: false
    },
    {
      id: 8,
      title: "เว็บ Portfolio",
      description: "เว็บ Portfolio แสดงข้อมูลส่วนตัว ประสบการณ์ ทักษะ และผลงานของ เกียรติภูมิ โภคา",
      image: "/port.png",
      images: ["/port1.png", "/port2.png", "/port3.png", "/port4.png", "/port5.png", "/port6.png", "/port7.png", "/port8.png"],
      tags: ["Next.JS", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://hacks-portfolio.vercel.app/pages/profile",
      featured: false
    },
    {
      id: 9,
      title: "เว็บรวบรวมปัญหาในโรงงาน",
      description: "ระบบรวบรวมและจัดการปัญหาที่พบในโรงงาน พร้อมวิธีการแก้ไขที่เป็นระบบ",
      image: "/EM1.png",
      images: ["/EM1.png", "/EM2.png", "/EM3.png", "/EM4.png", "/EM5.png"],
      tags: ["React.JS", "Laravel", "JavaScript", "PHP", "Tailwind CSS", "MySQL", "GCP"],
      featured: false
    }
  ]

  const openGallery = (project: Project) => { setGalleryProject(project); setLightboxIndex(null) }
  const closeGallery = () => { setGalleryProject(null); setLightboxIndex(null) }
  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => {
    if (galleryProject && lightboxIndex !== null)
      setLightboxIndex((lightboxIndex - 1 + galleryProject.images.length) % galleryProject.images.length)
  }
  const nextImage = () => {
    if (galleryProject && lightboxIndex !== null)
      setLightboxIndex((lightboxIndex + 1) % galleryProject.images.length)
  }

  const featuredProjects = projects.filter(p => p.featured)
  const allProjects = projects

  return (
    <MainLayout>
      <div className="min-h-screen py-6 sm:py-8 md:py-10 px-4 sm:px-5 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Page Header */}
          <div className="mb-7 sm:mb-9 md:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">ผลงานทั้งหมด</h1>
            <p className="text-gray-500 text-xs sm:text-sm mt-1.5">รวมโปรเจกต์และผลงานที่ผ่านมา · {allProjects.length} โปรเจกต์</p>
            <div className="h-0.5 w-14 bg-blue-600 rounded-full mt-3"></div>
          </div>

          {/* ─── Featured Projects ─── */}
          <section className="mb-10 sm:mb-12 md:mb-14">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">โปรเจกต์เด่น</h2>
              <span className="text-xs text-gray-400">(Featured)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Image */}
                  <div className="relative h-44 sm:h-52 md:h-48 lg:h-56 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Featured badge */}
                    <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                      ⭐ Featured
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-2 rounded-lg text-white text-xs sm:text-sm font-semibold transition-colors"
                        >
                          <ExternalLink size={14} /> ดูเว็บไซต์
                        </a>
                      )}
                      <button
                        onClick={() => openGallery(project)}
                        className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 px-3 sm:px-4 py-2 rounded-lg text-white text-xs sm:text-sm font-semibold transition-colors"
                      >
                        <Images size={14} /> รูปภาพ
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-800 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors"
                        >
                          <ExternalLink size={13} /> ดูเว็บไซต์
                        </a>
                      )}
                      <button
                        onClick={() => openGallery(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white border border-teal-200 hover:border-teal-600 text-xs sm:text-sm font-semibold rounded-lg transition-all"
                      >
                        <Images size={13} /> ดูรูปภาพ ({project.images.length})
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── All Projects ─── */}
          <section>
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div className="w-1 h-5 bg-teal-600 rounded-full"></div>
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">โปรเจกต์ทั้งหมด</h2>
              <span className="text-xs text-gray-400">({allProjects.length} โปรเจกต์)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-4 md:gap-5">
              {allProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-44 overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-2 left-2 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        ⭐
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors" title="ดูเว็บไซต์">
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="p-2 bg-gray-800 hover:bg-gray-900 rounded-lg text-white transition-colors" title="ดู GitHub">
                          <Github size={16} />
                        </a>
                      )}
                      <button onClick={() => openGallery(project)}
                        className="p-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-white transition-colors" title="ดูรูปภาพ">
                        <Images size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 flex flex-col flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-1.5 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] sm:text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 bg-gray-100 text-gray-400 rounded text-[10px] sm:text-xs">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => openGallery(project)}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 sm:py-2 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white border border-teal-200 hover:border-teal-600 text-[11px] sm:text-xs font-semibold rounded-lg transition-all"
                    >
                      <Images size={12} /> ดูรูปภาพ ({project.images.length})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ─── Gallery Modal ─── */}
      {galleryProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
          onClick={closeGallery}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-2xl md:max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-white/95 backdrop-blur border-b border-gray-100 rounded-t-2xl sm:rounded-t-3xl">
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-slate-800 leading-tight pr-4">
                  {galleryProject.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{galleryProject.images.length} รูปภาพ</p>
              </div>
              <button
                onClick={closeGallery}
                className="shrink-0 p-1.5 sm:p-2 rounded-xl bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-600 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="p-3 sm:p-5 md:p-6 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {galleryProject.images.map((img, index) => (
                <div
                  key={index}
                  className="relative group aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={img}
                    alt={`${galleryProject.title} รูปที่ ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 rounded-full px-2.5 py-0.5 text-xs font-semibold text-gray-700">ขยายดู</span>
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── Lightbox ─── */}
      {galleryProject && lightboxIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 60 }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all">
            <X size={22} />
          </button>

          {/* Counter */}
          <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 bg-white/10 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur">
            {lightboxIndex + 1} / {galleryProject.images.length}
          </div>

          {/* Prev */}
          {galleryProject.images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prevImage() }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/25 text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Image */}
          <div className="relative max-w-5xl w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img
              src={galleryProject.images[lightboxIndex]}
              alt={`${galleryProject.title} รูปที่ ${lightboxIndex + 1}`}
              className="max-h-[78vh] max-w-full rounded-xl sm:rounded-2xl shadow-2xl object-contain"
            />
          </div>

          {/* Next */}
          {galleryProject.images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); nextImage() }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/25 text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Thumbnail strip */}
          {galleryProject.images.length > 1 && (
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 overflow-x-auto max-w-[90vw] px-2">
              {galleryProject.images.map((img, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setLightboxIndex(i) }}
                  className={`shrink-0 w-10 h-7 sm:w-12 sm:h-8 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
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
