import React from 'react'

export const Status = () => {
  return (
    <div className='   mx-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
        <div className='flex justify-between p-8 px-65'>
            <div>
            <h2 className='text-white text-[60px] font-extrabold'>50K+</h2>
            <p className='text-[22px] text-white  flex justify-center'>Active Users</p>
        </div>
        <div>
            <h2 className='text-white text-[60px] font-extrabold'>200+</h2>
            <p className='text-[22px] text-white flex justify-center'>Premium Tools</p>
        </div>
        <div>
            <h2 className='text-white text-[60px] font-extrabold'>4.9</h2>
            <p className='text-[22px] text-white flex justify-center '>Rating</p>
        </div>
        </div>
    </div>
  )
}