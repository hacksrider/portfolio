"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const [activeMenu, setActiveMenu] = useState('Profile')
  const router = useRouter()
  const pathname = usePathname()
  
  const menuItems = [
    { name: 'Profile', path: '/pages/profile' },
    { name: 'Education', path: '/pages/education' },
    { name: 'Skills & Programs', path: '/pages/skill' },
    { name: 'Experian & Projects', path: '/pages/experian' },
    { name: 'Certificate', path: '/pages/certificate' },
    // { name: 'Resume', path: '/pages/resume' }
  ]
  
  // Update active menu when pathname changes
  useEffect(() => {
    const currentMenuItem = menuItems.find(item => item.path === pathname)
    if (currentMenuItem) {
      setActiveMenu(currentMenuItem.name)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  
  const handleMenuClick = (menu: string, path: string) => {
    setActiveMenu(menu)
    router.push(path)
  }
  
  return (
    <>
      <div className='flex'>
        <div className='w-1/4 h-[100vh] bg-gray-500 object-cover border-r-8 border-red-400'>
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
        <div className="w-3/4 bg-gray-300">{children}</div>
      </div>
    </>
  )
}

export default MainLayout