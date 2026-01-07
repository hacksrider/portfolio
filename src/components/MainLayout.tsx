"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { User, GraduationCap, Code, Briefcase, Award, FolderOpen } from 'lucide-react'

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const [activeMenu, setActiveMenu] = useState('Profile')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { name: 'Profile', path: '/pages/profile', icon: User },
    { name: 'Education', path: '/pages/education', icon: GraduationCap },
    { name: 'Skills & Tools', path: '/pages/skill', icon: Code },
    { name: 'Experian & Project', path: '/pages/experian', icon: Briefcase },
    { name: 'Certificate', path: '/pages/certificate', icon: Award },
    { name: 'Portfolio', path: '/pages/portfolio', icon: FolderOpen }
  ]

  // Update active menu when pathname changes
  useEffect(() => {
    const currentMenuItem = menuItems.find(item => item.path === pathname)
    if (currentMenuItem) {
      setActiveMenu(currentMenuItem.name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleMenuClick = (menu: string, path: string) => {
    setActiveMenu(menu)
    router.push(path)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <div className='flex flex-col md:flex-row bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
        {/* Mobile hamburger menu button */}
        <button 
          className='md:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-3 shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-110' 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Sidebar Backdrop for mobile */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm transition-opacity duration-300"
            onClick={toggleMobileMenu}
          ></div>
        )}

        {/* Sidebar - fixed on desktop, slide-in on mobile */}
        <div
          className={`${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block md:w-80 h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 fixed w-72 sm:w-80 z-40 transition-all duration-300 overflow-y-auto shadow-2xl`}
        >
          {/* Profile Section with Gradient Overlay */}
          <div className="relative pt-8 pb-6 px-6">
            {/* Decorative gradient blur */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/20 to-transparent"></div>
            
            {/* Avatar with animated border */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-75"></div>
              <Image 
                className='relative mx-auto rounded-full border-4 border-white shadow-2xl transform transition-transform duration-300 group-hover:scale-105' 
                src="/logo-profile.jpg" 
                alt="Profile" 
                width={140} 
                height={140} 
              />
            </div>
            
            {/* Name and Title */}
            <div className='mt-5 text-center relative z-10'>
              <h1 className='text-xl font-bold text-white mb-2 tracking-wide'>
                Kriattiphum Phokar
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mb-3"></div>
              <p className='text-sm text-indigo-200 font-medium'>
                R&D Engineer | Full-stack Developer
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className='px-4 pb-6'>
            <nav className='space-y-1'>
              {menuItems.map((menu, index) => {
                const IconComponent = menu.icon
                const isActive = activeMenu === menu.name
                
                return (
                  <button
                    key={index}
                    className={`
                      w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium text-sm
                      transition-all duration-300 cursor-pointer group
                      ${isActive 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105' 
                        : 'text-indigo-100 hover:bg-white/10 hover:translate-x-1'
                      }
                    `}
                    onClick={() => handleMenuClick(menu.name, menu.path)}
                  >
                    <IconComponent 
                      size={20} 
                      className={`transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                    />
                    <span className="flex-1 text-left">{menu.name}</span>
                    {isActive && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Decorative bottom gradient */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none"></div>
        </div>

        {/* Main content - with left padding/margin to make space for fixed sidebar */}
        <div className="w-full min-h-screen pt-16 md:pt-0 md:ml-80">
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>

      {/* Global styles for smooth scrolling */}
      <style jsx global>{`
        * {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
        }
      `}</style>
    </>
  )
}

export default MainLayout