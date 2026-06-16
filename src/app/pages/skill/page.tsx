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
  SiPostman, SiCanva, SiArduino, SiLaravel, SiPrisma,
  SiEspressif, SiMqtt, SiKicad,
} from 'react-icons/si'
import { SiC, SiCplusplus, SiGooglecloud } from 'react-icons/si'
import { LuNetwork } from 'react-icons/lu'

interface SkillItem {
  name: string
  level: 'Advanced' | 'Intermediate' | 'Beginner'
  percentage: number
  icon: React.ReactNode
}

interface CategoryGroup {
  name: string
  subtitle: string
  color: 'blue' | 'teal' | 'slate' | 'gray' | 'violet' | 'amber'
  items: SkillItem[]
}

const levelConfig: Record<string, { label: string; badge: string; bar: string }> = {
  Advanced:     { label: 'ขั้นสูง',    badge: 'bg-blue-100 text-blue-700',   bar: 'bg-blue-500' },
  Intermediate: { label: 'ระดับกลาง', badge: 'bg-teal-100 text-teal-700',   bar: 'bg-teal-500' },
  Beginner:     { label: 'เริ่มต้น',   badge: 'bg-gray-100 text-gray-500',   bar: 'bg-gray-400' },
}

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  blue:   { border: 'border-blue-500',   bg: 'bg-blue-50',   text: 'text-blue-700'  },
  teal:   { border: 'border-teal-500',   bg: 'bg-teal-50',   text: 'text-teal-700'  },
  slate:  { border: 'border-slate-400',  bg: 'bg-slate-50',  text: 'text-slate-700' },
  gray:   { border: 'border-gray-400',   bg: 'bg-gray-50',   text: 'text-gray-600'  },
  violet: { border: 'border-violet-400', bg: 'bg-violet-50', text: 'text-violet-600'},
  amber:  { border: 'border-amber-400',  bg: 'bg-amber-50',  text: 'text-amber-700' },
}

function CategorySection({ categories }: { categories: CategoryGroup[] }) {
  return (
    <div className="space-y-6">
      {categories.map((cat, idx) => {
        const c = colorMap[cat.color]
        return (
          <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            {/* Category Header */}
            <div className={`px-5 py-3.5 border-l-4 ${c.border} ${c.bg} flex items-center justify-between`}>
              <div>
                <h2 className={`font-bold text-base ${c.text}`}>{cat.name}</h2>
                <p className="text-xs text-gray-400 mt-0.5">{cat.subtitle}</p>
              </div>
              <span className="text-xs text-gray-400 font-medium">{cat.items.length} รายการ</span>
            </div>

            {/* Skills Grid */}
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {cat.items.map((item, i) => {
                const lv = levelConfig[item.level]
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-xl p-2 shadow-sm group-hover:shadow-md transition-shadow">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1.5 gap-2">
                        <span className="font-semibold text-sm text-gray-800 truncate">{item.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${lv.badge}`}>
                          {lv.label}
                        </span>
                      </div>
                      <div className="relative h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${lv.bar} transition-all duration-700`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <p className="text-right text-[10px] text-gray-400 mt-0.5">{item.percentage}%</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Skill() {
  const [activeTab, setActiveTab] = useState<'skills' | 'programs'>('skills')

  const FileZilla  = "/FileZilla_logo.svg"
  const Autocad    = "/Autocad_logo.png"
  const Solidworks = "/Solidworks_logo.jpg"
  const Proteus    = "/Proteus_logo.jpg"
  const Cursor     = "/Cursor_logo.png"

  const skillCategories: CategoryGroup[] = [
    {
      name: "พัฒนาหน้าเว็บ",
      subtitle: "Frontend Development",
      color: "blue",
      items: [
        { name: 'HTML',        level: 'Advanced',      percentage: 85, icon: <FaHtml5    className="w-full h-full text-orange-500" /> },
        { name: 'CSS',         level: 'Intermediate',  percentage: 70, icon: <FaCss3Alt  className="w-full h-full text-blue-500"   /> },
        { name: 'JavaScript',  level: 'Intermediate',  percentage: 75, icon: <FaJs       className="w-full h-full text-yellow-500" /> },
        { name: 'TypeScript',  level: 'Intermediate',  percentage: 65, icon: <SiTypescript className="w-full h-full text-blue-600" /> },
        { name: 'React.JS',    level: 'Intermediate',  percentage: 75, icon: <FaReact    className="w-full h-full text-cyan-500"   /> },
        { name: 'Next.JS',     level: 'Intermediate',  percentage: 70, icon: <SiNextdotjs className="w-full h-full text-gray-800"  /> },
        { name: 'TailwindCSS', level: 'Intermediate',  percentage: 75, icon: <SiTailwindcss className="w-full h-full text-teal-500" /> },
      ]
    },
    {
      name: "พัฒนาระบบหลังบ้าน",
      subtitle: "Backend Development",
      color: "teal",
      items: [
        { name: 'PHP / Laravel', level: 'Intermediate', percentage: 70, icon: <SiLaravel className="w-full h-full text-red-500" /> },
        { name: 'Prisma ORM',    level: 'Intermediate', percentage: 60, icon: <SiPrisma className="w-full h-full text-slate-800" /> },
      ]
    },
    {
      name: "ฐานข้อมูล",
      subtitle: "Database",
      color: "slate",
      items: [
        { name: 'MySQL',            level: 'Intermediate', percentage: 70, icon: <FaDatabase className="w-full h-full text-blue-700"  /> },
        { name: 'SQL',              level: 'Intermediate', percentage: 70, icon: <FaDatabase className="w-full h-full text-slate-600" /> },
        { name: 'Google Sheets API',level: 'Beginner',     percentage: 40, icon: <FaDatabase className="w-full h-full text-green-600" /> },
      ]
    },
    {
      name: "ภาษาโปรแกรมอื่นๆ",
      subtitle: "Other Languages",
      color: "gray",
      items: [
        { name: 'C++',    level: 'Intermediate', percentage: 60, icon: <SiCplusplus className="w-full h-full text-blue-600"  /> },
        { name: 'C',      level: 'Beginner',     percentage: 40, icon: <SiC         className="w-full h-full text-blue-500"  /> },
        { name: 'Python', level: 'Beginner',     percentage: 30, icon: <FaPython    className="w-full h-full text-yellow-600"/> },
        { name: 'Java',   level: 'Beginner',     percentage: 40, icon: <FaJava      className="w-full h-full text-red-600"   /> },
      ]
    },
    {
      name: "IoT และฮาร์ดแวร์",
      subtitle: "IoT & Hardware",
      color: "amber",
      items: [
        { name: 'ESP32',              level: 'Intermediate', percentage: 60, icon: <SiEspressif className="w-full h-full text-red-600"   /> },
        { name: 'Modbus Protocol',    level: 'Intermediate', percentage: 55, icon: <LuNetwork    className="w-full h-full text-amber-600" /> },
        { name: 'RESTful API / MQTT', level: 'Intermediate', percentage: 60, icon: <SiMqtt       className="w-full h-full text-purple-700" /> },
        { name: 'PCB Design (KiCad)', level: 'Beginner',     percentage: 35, icon: <SiKicad      className="w-full h-full text-[#314CB6]" /> },
      ]
    }
  ]

  const toolCategories: CategoryGroup[] = [
    {
      name: "เครื่องมือพัฒนา",
      subtitle: "Development Tools",
      color: "blue",
      items: [
        { name: 'Visual Studio Code', level: 'Advanced',     percentage: 85, icon: <VscCode   className="w-full h-full text-blue-500"   /> },
        { name: 'Cursor',             level: 'Advanced',     percentage: 85, icon: <img src={Cursor}    alt="Cursor"    className="w-full h-full object-contain" /> },
        { name: 'Git',                level: 'Intermediate', percentage: 70, icon: <FaGithub  className="w-full h-full text-gray-800"   /> },
        { name: 'Postman',            level: 'Intermediate', percentage: 60, icon: <SiPostman className="w-full h-full text-orange-500" /> },
      ]
    },
    {
      name: "คลาวด์และ Deploy",
      subtitle: "Cloud & Deployment",
      color: "teal",
      items: [
        { name: 'Google Cloud Platform', level: 'Intermediate', percentage: 50, icon: <SiGooglecloud className="w-full h-full text-blue-500" /> },
        { name: 'FileZilla (FTP)',        level: 'Intermediate', percentage: 65, icon: <img src={FileZilla} alt="FileZilla" className="w-full h-full object-contain" /> },
      ]
    },
    {
      name: "ออกแบบ",
      subtitle: "Design",
      color: "violet",
      items: [
        { name: 'Figma', level: 'Beginner',     percentage: 45, icon: <FaFigma  className="w-full h-full text-violet-500" /> },
        { name: 'Canva', level: 'Intermediate', percentage: 65, icon: <SiCanva  className="w-full h-full text-blue-400"   /> },
      ]
    },
    {
      name: "วิศวกรรมและ IoT",
      subtitle: "Engineering & IoT",
      color: "amber",
      items: [
        { name: 'Arduino IDE', level: 'Intermediate', percentage: 65, icon: <SiArduino  className="w-full h-full text-teal-600"   /> },
        { name: 'KiCad',       level: 'Beginner',     percentage: 35, icon: <SiKicad className="w-full h-full text-[#314CB6]" /> },
        { name: 'AutoCAD',     level: 'Intermediate', percentage: 65, icon: <img src={Autocad}    alt="AutoCAD"    className="w-full h-full object-contain" /> },
        { name: 'Proteus',     level: 'Intermediate', percentage: 60, icon: <img src={Proteus}    alt="Proteus"    className="w-full h-full object-contain" /> },
        { name: 'SolidWorks',  level: 'Intermediate', percentage: 50, icon: <img src={Solidworks} alt="SolidWorks" className="w-full h-full object-contain" /> },
      ]
    },
    {
      name: "ทั่วไป",
      subtitle: "General",
      color: "gray",
      items: [
        { name: 'Microsoft 365', level: 'Intermediate', percentage: 70, icon: <FaMicrosoft className="w-full h-full text-blue-600" /> },
      ]
    }
  ]

  return (
    <MainLayout>
      <div className="min-h-screen py-6 sm:py-8 md:py-10 px-4 sm:px-5 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          {/* Page Header */}
          <div className="mb-7 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">ทักษะและเครื่องมือ</h1>
            <p className="text-gray-500 text-xs sm:text-sm mt-1.5">ความสามารถและเครื่องมือที่ใช้งานได้จริง</p>
            <div className="h-0.5 w-14 bg-blue-600 rounded-full mt-3"></div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-4 mb-7 flex-wrap">
            {Object.entries(levelConfig).map(([key, val]) => (
              <div key={key} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${val.bar}`}></span>
                <span className="text-xs text-gray-500">{val.label}</span>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-1.5 mb-8 bg-white p-1.5 rounded-xl border border-gray-200 shadow-sm w-fit mx-auto">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-7 py-2.5 font-semibold text-sm rounded-lg transition-all duration-200 ${
                activeTab === 'skills'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              💻 ทักษะ
            </button>
            <button
              onClick={() => setActiveTab('programs')}
              className={`px-7 py-2.5 font-semibold text-sm rounded-lg transition-all duration-200 ${
                activeTab === 'programs'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              🛠️ เครื่องมือ
            </button>
          </div>

          {activeTab === 'skills'   && <CategorySection categories={skillCategories} />}
          {activeTab === 'programs' && <CategorySection categories={toolCategories}  />}

        </div>
      </div>
    </MainLayout>
  )
}

export default Skill
