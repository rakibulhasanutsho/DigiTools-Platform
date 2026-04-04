import React from 'react'
import banner from "../assets/banner.png";
import { FaPlay } from 'react-icons/fa';



export const Banner = () => {
  return (
    <div className='p-5 w-full lg:w-[1140px] mx-auto flex flex-col lg:flex-row gap-10 my-15 items-center text-center lg:text-left'>
        <div className='space-y-4'>
            <ul className='bg-[#E1E7FF] max-w-70 rounded-full list-disc pl-6 '>
                <li className=' rounded-2xl p-3 max-w-70 bg-clip-text btn-ghost  text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA] '> New: AI-Powered Tools Available</li>
            </ul>
            <h2 className='text-[48px] lg:text-[64px] font-extrabold leading-[84px] text-[#101727] '>Supercharge Your<br />Digital Workflow</h2>
            <p className='text-[18px] leading-[30px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br /> Explore Products</p>
            <br />
            <div className='flex gap-3 justify-center lg:justify-start'>
                <button className='btn rounded-2xl  text-white  bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
                <button className='btn btn-outline rounded-2xl'><FaPlay></FaPlay> Watch Demo</button>
            </div>

        </div>
        <div>
            <img src={banner} />
        </div>
    </div>
  )
}