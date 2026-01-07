/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MainLayout from '@/components/MainLayout'
import { ExternalLink, Github } from 'lucide-react'

function Portfolio() {
  // Sample portfolio data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "เว็บเพจจำหน่ายสวิทชิ่งโมดิฟาย",
      description: "เป็นเว็บที่ จำหน่ายสวิทชิ่งโมดิฟาย โดยมีหน้าแสดงสินค้าและรายละเอียดสินค้า",
      image: "/switching.png",
      tags: ["Html", "Css", "Javascript", "Php", "MySql"],
      demoUrl: "https://xn--72cf5aj7bkj7a0a1gpcd7qkd.com/",
      // githubUrl: "https://github.com/yourusername/ecommerce-platform",
      featured: true
    },
    {
      id: 2,
      title: "สำนักงานกฎหมายสุวินทวงศ์",
      description: "บริการจดทะเบียนจัดตั้งนิติบุคคล จดทะเบียนเปลี่ยนแปลง บริการรับทำบัญชี ตรวจสอบบัญชีและบริการให้คำปรึกษาทางด้านกฎหมาย บัญชี ภาษีอากร",
      image: "/suwin.png",
      tags: ["Html", "Css", "Javascript", "Php", "MySql"],
      demoUrl: "https://www.suwintawongaccounting.com/index.php",
      featured: true
    },
    {
      id: 3,
      title: "ระบบจัดการจองสนามสนามฟุตบอลและซื้อบริการออกกำลังกาย",
      description: "เป็นระบบจองสนามฟุตบอลออนไลน์ และซื้อบริการออกกำลังกาย",
      image: "/usport.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "MySql"],
      githubUrl: "https://github.com/hacksrider/project_usport",
      featured: false
    },
    {
      id: 4,
      title: "เว็บให้บริการเช่าผ้าดำไฟดาว",
      description: "ให้บริการ ในงานติดตั้ง และรื้อถอนผ้าดำ ผ้าดำไฟดาว ผ้าขาวไฟดาว ม่านดำบังแสง ผ้าดำคอนเสิร์ต ผ้าดาวงานแต่ง ให้บริการทั่วประเทศ",
      image: "/ผ้าดำ.png",
      tags: ["Html", "Css", "Javascript", "Php", "MySql"],
      demoUrl: "https://xn--b3cux1gbb6gzcl6b.com/",
      featured: false
    },
    {
      id: 5,
      title: "เว็บให้บริการรถสองแถว",
      description: "เป็นเว็บไซต์ที่ให้เช่ารถสองแถวใหญ่ สองแถว 6 ล้อ บริการรับส่งพนักงาน รับเช่าเหมาเที่ยว หรืองานต่างๆ รวดเร็วปลอดภัย ตรงเวลา ถูกกฎหมาย",
      image: "/car.png",
      tags: ["Html", "Css", "Javascript", "Php"],
      demoUrl: "https://www.xn--12cfiacc0hblwfp0hdf1df9b5co7eefpgb59aia2hsf0a.com/",
      featured: false
    },
    {
      id: 6,
      title: "เว็บบริการจัดทำเว็บไซต์",
      description: "เป็นเว็บที่ให้บริการ การจัดทำเว็บเพจ เว็บไซต์ขนาดเล็ก สำหรับบริษัท องกรณ์ หรือธุรกิจส่วนบุคคล ขนาดเล็ก",
      image: "/web.png",
      tags: ["Html","JavaScript", "CSS",],
      demoUrl: "https://www.hacksdev.com/",
      featured: false
    },
    {
      id: 7,
      title: "เว็บ Portfolio",
      description: "เป็นเว็บ Portfolio แสดงข้อมูลส่วนตัวต่างๆ รวมไปถึงผลงานของ นายเกียรติภูมิ โภคา (แฮ็คส์)",
      image: "/port.png",
      tags: ["Next.JS","TypeScript", "Html", "Tailwind CSS"],
      demoUrl: "http://localhost:3000/pages/profile",
      featured: false
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 relative">
            {/* Decorative elements */}
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
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Image Section */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Action Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-2xl text-white font-semibold shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-110 transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                        <span>ดูเว็บไซต์</span>
                      </a>
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
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
                  {/* Decorative gradient */}
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
                    <div className="flex flex-wrap gap-2">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Portfolio