/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"
import React, { useState } from 'react'
import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

// สร้าง component สำหรับ Modal แสดงรูปภาพ
// @ts-expect-error
const ImageModal = ({ isOpen, onClose, imageUrl, altText }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm" 
             onClick={onClose}>
            <div className="relative w-11/12 max-w-4xl max-h-[90vh]">
                <button 
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md z-10"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line> 
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div className="relative h-[80vh] w-full">
                    <Image 
                        src={imageUrl} 
                        alt={altText} 
                        fill
                        className="object-contain" 
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            </div>
        </div>
    );
};

// สร้าง component สำหรับรูปภาพที่สามารถคลิกได้
// @ts-expect-error
const ClickableImage = ({ src, alt, className }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div 
                className="relative w-full h-[200px] sm:h-54 cursor-pointer"
                onClick={() => setModalOpen(true)}
            >
                <Image 
                    src={src} 
                    alt={alt} 
                    fill
                    className={className || 'object-cover'} 
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity flex items-center justify-center">
                    <span className="text-white text-opacity-0 hover:text-opacity-100">คลิกเพื่อดูรูปขยาย</span>
                </div>
            </div>
            <ImageModal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                imageUrl={src} 
                altText={alt} 
            />
        </>
    );
};

function Education() {
    return (
        <MainLayout>
            {/* <div className="py-8 px-4 max-w-7xl mx-auto"></div> */}
            <div className='py-4 px-4 max-w-7xl mx-auto'>
                <div className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-4 overflow-auto'>
                    <Card className='flex flex-col pb-0 hover:shadow-2xl hover:shadow-slate-400 bg-amber-100 hover:cursor-pointer transition-transform duration-300 hover:scale-[0.98]'>
                        <CardHeader className='pb-2'>
                            <div className='rounded-full flex justify-center pb-2'>
                                <div className="relative w-20 h-20 cursor-pointer">
                                    <Image 
                                        src="/rmutt.gif" 
                                        alt="logo" 
                                        fill
                                        className="object-contain" 
                                    />
                                </div>
                            </div>
                            <CardTitle className="text-center text-lg sm:text-xl">มทร.ธัญบุรี</CardTitle>
                            <CardDescription className="text-center text-sm">ระดับปริญาตรี</CardDescription>
                        </CardHeader>
                        <CardHeader className='py-2'>
                            <CardTitle className="text-base sm:text-lg mb-1">ข้อมูลด้านการศึกษา</CardTitle>
                            <CardDescription className="text-xs sm:text-sm"><b>ระดับการศึกษา: </b>ปริญญาตรี เทียบโอน ภาคปกติ </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>คณะ: </b>คณะวิศวกรรมศาสตร์ </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>หลักสูตร: </b>วิศวกรรมคอมพิวเตอร์ </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>วันที่สำเร็จ: </b>31 มีนาคม 2568 </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>เกรดเฉลี่ย: </b>3.35</CardDescription>
                        </CardHeader>
                        <div className="mt-auto">
                            <ClickableImage 
                                src="/image-rmutt.png" 
                                alt="รูปภาพมหาวิทยาลัย" 
                                className='rounded-b-lg object-cover' 
                            />
                        </div>
                    </Card>
                    
                    <Card className='flex flex-col pb-0 hover:shadow-2xl hover:shadow-slate-400 bg-amber-100 hover:cursor-pointer transition-transform duration-300 hover:scale-[0.98]'>
                        <CardHeader className='pb-2'>
                            <div className='rounded-full flex justify-center pb-2'>
                                <div className="relative w-20 h-20 cursor-pointer">
                                    <Image 
                                        src="/Logo-SNKTC.png" 
                                        alt="logo" 
                                        fill
                                        className="object-contain py-3" 
                                    />
                                </div>
                            </div>
                            <CardTitle className="text-center text-lg sm:text-xl">วิทยาลัยเทคนิคสกลนคร</CardTitle>
                            <CardDescription className="text-center text-sm">ระดับ ปวส.</CardDescription>
                        </CardHeader>
                        <CardHeader className='py-2'>
                            <CardTitle className="text-base sm:text-lg mb-1">ข้อมูลด้านการศึกษา</CardTitle>
                            <CardDescription className="text-xs sm:text-sm"><b>ระดับการศึกษา: </b>ประกาศนียบัตรวิชาชีพขั้นสูง</CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>แผนก: </b>แผนกไฟฟ้า </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>หลักสูตร: </b>อุตสาหกรรมการผลิตไฟฟ้า </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>วันที่สำเร็จ: </b>31 มีนาคม 2565 </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>เกรดเฉลี่ย: </b>3.71</CardDescription>
                        </CardHeader>
                        <div className="mt-auto">
                            <ClickableImage 
                                src="/image-snktc2.jpg" 
                                alt="รูปภาพวิทยาลัย" 
                                className='rounded-b-lg object-cover' 
                            />
                        </div>
                    </Card>
                    
                    <Card className='flex flex-col pb-0 hover:shadow-2xl hover:shadow-slate-400 bg-amber-100 hover:cursor-pointer transition-transform duration-300 hover:scale-[0.98] md:col-span-2 lg:col-span-1'>
                        <CardHeader className='pb-2'>
                            <div className='rounded-full flex justify-center pb-2'>
                                <div className="relative w-20 h-20 cursor-pointer">
                                    <Image 
                                        src="/Logo-SNKTC.png" 
                                        alt="logo" 
                                        fill
                                        className="object-contain py-3" 
                                    />
                                </div>
                            </div>
                            <CardTitle className="text-center text-lg sm:text-xl">วิทยาลัยเทคนิคสกลนคร</CardTitle>
                            <CardDescription className="text-center text-sm">ระดับ ปวช.</CardDescription>
                        </CardHeader>
                        <CardHeader className='py-2'>
                            <CardTitle className="text-base sm:text-lg mb-1">ข้อมูลด้านการศึกษา</CardTitle>
                            <CardDescription className="text-xs sm:text-sm"><b>ระดับการศึกษา: </b>ประกาศนียบัตรวิชาชีพ</CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>แผนก: </b>แผนกไฟฟ้า </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>หลักสูตร: </b>ไฟฟ้ากำลัง </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>วันที่สำเร็จ: </b>31 มีนาคม 2563 </CardDescription>
                            <CardDescription className="text-xs sm:text-sm"><b>เกรดเฉลี่ย: </b>3.50</CardDescription>
                        </CardHeader>
                        <div className="mt-auto">
                            <ClickableImage 
                                src="/image-snktc.jpg" 
                                alt="รูปภาพวิทยาลัย" 
                                className='rounded-b-lg object-cover' 
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </MainLayout>
    )
}

export default Education