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
      <div className="flex-1 overflow-y-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
            {/* <span className="block">My Portfolio</span> */}
            <span className="block text-indigo-600 dark:text-indigo-400">My Portfolio</span>
          </h1>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project) => (
              <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 p-3 rounded-full text-white hover:bg-indigo-700">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full">
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.tags.slice(0, 10).map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Portfolio