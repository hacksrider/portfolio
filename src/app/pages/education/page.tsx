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
            <div className='min-h-screen py-12 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'>
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        ประวัติการศึกษา
                    </h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto shadow-lg"></div>
                </div>
                
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <Card className='group flex flex-col pb-0 bg-white/80 backdrop-blur-lg border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden relative'>
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        
                        <CardHeader className='pb-2 relative z-10'>
                            <div className='flex justify-center pb-2'>
                                <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-2 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <Image 
                                        src="/rmutt.gif" 
                                        alt="logo" 
                                        fill
                                        className="object-contain p-1" 
                                    />
                                </div>
                            </div>
                            <CardTitle className="text-center text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                มทร.ธัญบุรี
                            </CardTitle>
                            <CardDescription className="text-center text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mx-auto inline-block">
                                ระดับปริญญาตรี
                            </CardDescription>
                        </CardHeader>
                        <CardHeader className='py-4 relative z-10'>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                                <CardTitle className="text-lg font-bold text-gray-800">ข้อมูลด้านการศึกษา</CardTitle>
                            </div>
                            <div className="space-y-2">
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-indigo-600 min-w-fit">ระดับการศึกษา:</span>
                                    <span className="text-gray-700">ปริญญาตรี เทียบโอน ภาคปกติ</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-indigo-600 min-w-fit">คณะ:</span>
                                    <span className="text-gray-700">คณะวิศวกรรมศาสตร์</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-indigo-600 min-w-fit">หลักสูตร:</span>
                                    <span className="text-gray-700">วิศวกรรมคอมพิวเตอร์</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-indigo-600 min-w-fit">วันที่สำเร็จ:</span>
                                    <span className="text-gray-700">31 มีนาคม 2568</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-indigo-600 min-w-fit">เกรดเฉลี่ย:</span>
                                    <span className="font-bold text-lg bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">3.35</span>
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <div className="mt-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent group-hover:from-indigo-500/20 transition-colors duration-300"></div>
                            <ClickableImage 
                                src="/image-rmutt.png" 
                                alt="รูปภาพมหาวิทยาลัย" 
                                className='rounded-b-lg object-cover transform group-hover:scale-105 transition-transform duration-500' 
                            />
                        </div>
                    </Card>
                    
                    <Card className='group flex flex-col pb-0 bg-white/80 backdrop-blur-lg border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden relative'>
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        
                        <CardHeader className='pb-2 relative z-10'>
                            <div className='flex justify-center pb-2'>
                                <div className="relative w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-2 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <Image 
                                        src="/Logo-SNKTC.png" 
                                        alt="logo" 
                                        fill
                                        className="object-contain p-3" 
                                    />
                                </div>
                            </div>
                            <CardTitle className="text-center text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                วิทยาลัยเทคนิคสกลนคร
                            </CardTitle>
                            <CardDescription className="text-center text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full mx-auto inline-block">
                                ระดับ ปวส.
                            </CardDescription>
                        </CardHeader>
                        <CardHeader className='py-4 relative z-10'>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                                <CardTitle className="text-lg font-bold text-gray-800">ข้อมูลด้านการศึกษา</CardTitle>
                            </div>
                            <div className="space-y-2">
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-purple-600 min-w-fit">ระดับการศึกษา:</span>
                                    <span className="text-gray-700">ประกาศนียบัตรวิชาชีพขั้นสูง</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-purple-600 min-w-fit">แผนก:</span>
                                    <span className="text-gray-700">แผนกไฟฟ้า</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-purple-600 min-w-fit">หลักสูตร:</span>
                                    <span className="text-gray-700">อุตสาหกรรมการผลิตไฟฟ้า</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-purple-600 min-w-fit">วันที่สำเร็จ:</span>
                                    <span className="text-gray-700">31 มีนาคม 2565</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-purple-600 min-w-fit">เกรดเฉลี่ย:</span>
                                    <span className="font-bold text-lg bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">3.71</span>
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <div className="mt-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent group-hover:from-purple-500/20 transition-colors duration-300"></div>
                            <ClickableImage 
                                src="/image-snktc2.jpg" 
                                alt="รูปภาพวิทยาลัย" 
                                className='rounded-b-lg object-cover transform group-hover:scale-105 transition-transform duration-500' 
                            />
                        </div>
                    </Card>
                    
                    <Card className='group flex flex-col pb-0 bg-white/80 backdrop-blur-lg border-2 border-pink-100 hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden relative md:col-span-2 lg:col-span-1'>
                        {/* Decorative gradient overlay */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        
                        <CardHeader className='pb-2 relative z-10'>
                            <div className='flex justify-center pb-2'>
                                <div className="relative w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-2 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                    <Image 
                                        src="/Logo-SNKTC.png" 
                                        alt="logo" 
                                        fill
                                        className="object-contain p-3" 
                                    />
                                </div>
                            </div>
                            <CardTitle className="text-center text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                                วิทยาลัยเทคนิคสกลนคร
                            </CardTitle>
                            <CardDescription className="text-center text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full mx-auto inline-block">
                                ระดับ ปวช.
                            </CardDescription>
                        </CardHeader>
                        <CardHeader className='py-4 relative z-10'>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full"></div>
                                <CardTitle className="text-lg font-bold text-gray-800">ข้อมูลด้านการศึกษา</CardTitle>
                            </div>
                            <div className="space-y-2">
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-pink-600 min-w-fit">ระดับการศึกษา:</span>
                                    <span className="text-gray-700">ประกาศนียบัตรวิชาชีพ</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-pink-600 min-w-fit">แผนก:</span>
                                    <span className="text-gray-700">แผนกไฟฟ้า</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-pink-600 min-w-fit">หลักสูตร:</span>
                                    <span className="text-gray-700">ไฟฟ้ากำลัง</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-pink-600 min-w-fit">วันที่สำเร็จ:</span>
                                    <span className="text-gray-700">31 มีนาคม 2563</span>
                                </CardDescription>
                                <CardDescription className="text-sm flex items-start gap-2">
                                    <span className="font-bold text-pink-600 min-w-fit">เกรดเฉลี่ย:</span>
                                    <span className="font-bold text-lg bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">3.50</span>
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <div className="mt-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent group-hover:from-pink-500/20 transition-colors duration-300"></div>
                            <ClickableImage 
                                src="/image-snktc.jpg" 
                                alt="รูปภาพวิทยาลัย" 
                                className='rounded-b-lg object-cover transform group-hover:scale-105 transition-transform duration-500' 
                            />
                        </div>
                    </Card>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Education