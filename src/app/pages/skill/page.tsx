"use client"
import React, { useState } from 'react'
import MainLayout from '@/components/MainLayout'

function Skill() {
  const [activeTab, setActiveTab] = useState('skills')
  
  const skills = [
    { name: 'HTML', level: 'Advanced', color: 'text-orange-500', percentage: 90 },
    { name: 'CSS', level: 'Intermediate', color: 'text-green-500', percentage: 70 },
    { name: 'PHP', level: 'Beginner', color: 'text-blue-500', percentage: 40 },
    { name: 'Java Script', level: 'Intermediate', color: 'text-green-500', percentage: 65 },
    { name: 'Next.JS', level: 'Intermediate', color: 'text-green-500', percentage: 75 },
    { name: 'React.JS', level: 'Intermediate', color: 'text-green-500', percentage: 65 },
    { name: 'Typescript', level: 'Intermediate', color: 'text-green-500', percentage: 65 },
    { name: 'TailwindCSS', level: 'Intermediate', color: 'text-green-500', percentage: 75 },
    { name: 'Prisma', level: 'Beginner', color: 'text-blue-500', percentage: 45 },
    { name: 'Node.js', level: 'Beginner', color: 'text-blue-500', percentage: 45 },
    { name: 'MySql', level: 'Intermediate', color: 'text-green-500', percentage: 65 }
  ]

  const programs = [
    { name: 'VS Code', level: 'Advanced', color: 'text-orange-500', percentage: 90 },
    { name: 'Postman', level: 'Intermediate', color: 'text-green-500', percentage: 75 },
    { name: 'Github', level: 'Intermediate', color: 'text-green-500', percentage: 70 },
    { name: 'Microsoft 365', level: 'Advanced', color: 'text-orange-500', percentage: 80 },
    { name: 'Canva', level: 'Intermediate', color: 'text-green-500', percentage: 65 },
    { name: 'Figma', level: 'Beginner', color: 'text-blue-500', percentage: 50 },
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
      <div className="h-screen flex flex-col p-8">
        <div className="max-w-5xl w-full mx-auto bg-white rounded-xl shadow-lg p-8 flex-grow flex flex-col overflow-hidden">
          
          {/* Header */}
          {/* <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">My Professional Profile</h1>
            <p className="text-gray-600">Skills & Experience</p>
          </div> */}
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-2 font-medium text-lg transition-colors cursor-pointer ${
                activeTab === 'skills'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              SKILLS
            </button>
            <button
              onClick={() => setActiveTab('programs')}
              className={`px-6 py-2 font-medium text-lg transition-colors cursor-pointer ${
                activeTab === 'programs'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              PROGRAMS
            </button>
          </div>
          
          {/* Content Container */}
          <div className="flex-grow overflow-y-auto pr-4 custom-scrollbar">
            {/* Skills Section */}
            {activeTab === 'skills' && (
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-amber-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-102"
                    style={{ 
                      animationDelay: getAnimationDelay(index),
                      animation: 'fadeIn 0.5s ease-in-out forwards'
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-gray-800">{skill.name}</h3>
                      <span className={`${skill.color} font-medium px-3 py-1 rounded-full text-sm bg-white shadow-sm`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${getLevelColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.percentage}%`, animationDelay: getAnimationDelay(index) }}
                      ></div>
                    </div>
                    
                    <div className="text-right text-xs text-gray-500">{skill.percentage}%</div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Programs Section */}
            {activeTab === 'programs' && (
              <div className="grid md:grid-cols-2 gap-6">
                {programs.map((program, index) => (
                  <div 
                    key={index}
                    className="bg-amber-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-102"
                    style={{ 
                      animationDelay: getAnimationDelay(index),
                      animation: 'fadeIn 0.5s ease-in-out forwards'
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-gray-800">{program.name}</h3>
                      <span className={`${program.color} font-medium px-3 py-1 rounded-full text-sm bg-white shadow-sm`}>
                        {program.level}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${getLevelColor(program.level)} transition-all duration-1000 ease-out`}
                        style={{ width: `${program.percentage}%`, animationDelay: getAnimationDelay(index) }}
                      ></div>
                    </div>
                    
                    <div className="text-right text-xs text-gray-500">{program.percentage}%</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #aaa;
        }
      `}</style>
    </MainLayout>
  )
}

export default Skill