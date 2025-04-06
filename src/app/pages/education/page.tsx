import React from 'react'
import MainLayout from '@/components/MainLayout'
import Image from 'next/image'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function Education() {
    return (
        <MainLayout>
            <div className='grid grid-cols-3 gap-4 px-4 py-4 h-[100vh]'>
                <Card className='pb-0 hover:shadow-2xl hover:shadow-slate-400 bg-amber-100 hover:cursor-pointer hover:scale-97'>
                    <CardHeader>
                        <div className='rounded-full flex justify-center pb-4'>
                            <Image src="/rmutt.gif" alt="logo" width={100} height={100} />
                        </div>
                        <CardTitle>มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี</CardTitle>
                        <CardDescription>ระดับปริญาตรี</CardDescription>
                    </CardHeader>
                    <CardHeader>
                        <CardTitle>ข้อมูลด้านการศึกษา</CardTitle>
                        <CardDescription><b>ระดับการศึกษา: </b>ปริญญาตรี เทียบโอน ภาคปกติ </CardDescription>
                        <CardDescription><b>คณะ: </b>คณะวิศวกรรมศาสตร์  </CardDescription>
                        <CardDescription><b>หลักสูตร: </b>วิศวกรรมคอมพิวเตอร์ </CardDescription>
                        <CardDescription><b>วันที่สำเร็จ: </b>31 มีนาคม 2568 </CardDescription>
                        <CardDescription><b>เกรดเฉลี่ย: </b>3.35</CardDescription>
                    </CardHeader>
                    <Image src="/image-rmutt.png" alt="logo" width={375} height={100} className='rounded-b-lg'  />
                </Card>
                <Card className='pb-0 hover:shadow-2xl hover:shadow-slate-400 bg-amber-100 hover:cursor-pointer hover:scale-97'>
                    <CardHeader>
                        <div className='rounded-full flex justify-center pb-4'>
                            <Image src="/Logo-SNKTC.png" alt="logo" width={100} height={100} className='py-[23px]' />
                        </div>
                        <CardTitle>วิทยาลัยเทคนิคสกลนคร</CardTitle>
                        <CardDescription>ระดับประกาศนียบัตรวิชาชีพขั้นสูง (ปวส.)</CardDescription>
                    </CardHeader>
                    <CardHeader>
                        <CardTitle>ข้อมูลด้านการศึกษา</CardTitle>
                        <CardDescription><b>ระดับการศึกษา: </b>ระดับประกาศนียบัตรวิชาชีพขั้นสูง</CardDescription>
                        <CardDescription><b>แผนก: </b>แผนกไฟฟ้า  </CardDescription>
                        <CardDescription><b>หลักสูตร: </b>อุตสาหกรรมการผลิตไฟฟ้า </CardDescription>
                        <CardDescription><b>วันที่สำเร็จ: </b>31 มีนาคม 2565 </CardDescription>
                        <CardDescription><b>เกรดเฉลี่ย: </b>3.71</CardDescription>
                    </CardHeader>
                    <Image src="/image-snktc2.jpg" alt="logo" width={370} height={100} className='rounded-b-lg'  />
                </Card>
                <Card className='pb-0 hover:shadow-2xl hover:shadow-slate-400 bg-amber-100 hover:cursor-pointer hover:scale-97'>
                    <CardHeader>
                        <div className='rounded-full flex justify-center pb-4'>
                            <Image src="/Logo-SNKTC.png" alt="logo" width={100} height={100} className='py-[23px]' />
                        </div>
                        <CardTitle>วิทยาลัยเทคนิคสกลนคร</CardTitle>
                        <CardDescription>ระดับประกาศนียบัตรวิชาชีพ (ปวช.)</CardDescription>
                    </CardHeader>
                    <CardHeader>
                        <CardTitle>ข้อมูลด้านการศึกษา</CardTitle>
                        <CardDescription><b>ระดับการศึกษา: </b>ประกาศนียบัตรวิชาชีพ</CardDescription>
                        <CardDescription><b>แผนก: </b>แผนกไฟฟ้า  </CardDescription>
                        <CardDescription><b>หลักสูตร: </b>ไฟฟ้ากำลัง </CardDescription>
                        <CardDescription><b>วันที่สำเร็จ: </b>31 มีนาคม 2563 </CardDescription>
                        <CardDescription><b>เกรดเฉลี่ย: </b>3.50</CardDescription>
                    </CardHeader>
                    <Image src="/image-snktc.jpg" alt="logo" width={370} height={100} className='rounded-b-lg'  />
                </Card>
            </div>

        </MainLayout>
    )
}

export default Education