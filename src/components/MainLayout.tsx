"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const [activeMenu, setActiveMenu] = useState('Profile')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { name: 'Profile', path: '/pages/profile' },
    { name: 'Education', path: '/pages/education' },
    { name: 'Skills & Tools', path: '/pages/skill' },
    { name: 'Experian & Project', path: '/pages/experian' },
    { name: 'Certificate', path: '/pages/certificate' },
    { name: 'Portfolio', path: '/pages/portfolio' }
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
      <div className='flex flex-col md:flex-row'>
        {/* Mobile hamburger menu button */}
        <div className='md:hidden fixed top-4 left-4 z-50 bg-red-400 rounded-full p-3 shadow-lg' onClick={toggleMobileMenu}>
          <div className='w-6 h-0.5 bg-white mb-1.5'></div>
          <div className='w-6 h-0.5 bg-white mb-1.5'></div>
          <div className='w-6 h-0.5 bg-white'></div>
        </div>

        {/* Sidebar - fixed on desktop, fixed on mobile when opened */}
        <div
          className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block md:w-1/4 h-screen bg-gray-500 object-cover border-r-8 border-red-400 fixed w-full z-40 transition-all duration-300 overflow-y-auto`}
        >
          <Image className='mt-6 mx-auto rounded-full border-4 border-gray-400' src="/116530462027-1.jpg" alt="" width={150} height={150} />
          <div className='leading-2'>
            <h1 className='text-center text-xl font-bold mt-5'>Kriattiphum Phokar</h1>
            <p className='text-center mt-2'>Web Developer</p>
          </div>
          <div className='mt-8'>
            <ul className='text-center leading-14 text-xl font-bold'>
              {menuItems.map((menu, index) => (
                <li
                  key={index}
                  className={`border-y-2 ${index > 0 ? 'border-t-0' : ''} border-gray-400 cursor-pointer py-1 ${activeMenu === menu.name ? 'bg-red-300 text-blue-700' : ''}`}
                  onClick={() => handleMenuClick(menu.name, menu.path)}
                >
                  {menu.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main content - with left padding/margin to make space for fixed sidebar */}
        <div className="w-full bg-gray-300 min-h-screen pt-4 md:pt-0 md:ml-1/4 md:pl-[380px] pl-0">
          <div className="md:ml-1/4 w-full">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout