import React from 'react'
import banner from "../assets/banner.png";
import { FaPlay } from 'react-icons/fa';



export const Banner = () => {
  return (
    <div className='p-5 w-full lg:w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8  my-15 lg:justify-between items-center '>
        <div className='lg:col-span-7 space-y-4 items-center  lg:text-left'>
            <ul className='bg-[#E1E7FF] max-w-75 rounded-full list-disc pl-6 '>
                <li className=' rounded-2xl p-3 max-w-70 bg-clip-text btn-ghost  text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA] '> New: AI-Powered Tools Available</li>
            </ul>
            <h2 className='text-[48px] lg:text-[60px] font-extrabold leading-[84px] text-[#101727] '>Supercharge Your Digital Workflow</h2>
            <p className='text-[18px] leading-[30px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore Products</p>
            <br />
            <div className='flex gap-3 justify-center lg:justify-start'>
                <button className='btn rounded-2xl  text-white  bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
                <button className='btn btn-outline rounded-2xl'><FaPlay></FaPlay> Watch Demo</button>
            </div>

        </div>
        <div className='lg:col-span-5'>
            <img src={banner} />
        </div>
    </div>
  )
}