import React from 'react';
import user from "../assets/user.png";
import rocket from "../assets/rocket.png";
import picPackage from "../assets/package.png"

const Accounts = () => {
  return (
    <div className='w-full mx-auto p-5 lg:p-20 space-y-10 bg-[#F9FAFC]'>
        <div className='text-center space-y-4'>
            <h2 className='text-[48px] font-extrabold  text-[#101727]'>Get Started in 3 Steps</h2>
            <p className='text-[16px] text-[#627382] leading-5'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className='p-10 space-y-4 text-center bg-white rounded-2xl'>
                <div className='flex justify-between'>
                    <p></p>
                    <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-full w-13 text-white font-bold'>01</p>
                </div>
                <img className='mx-auto' src={user} alt="" />
                <h4 className='text-2xl font-bold text-[#101727]'>Create Account</h4>
                <p className='text-[16px] text-[#627382] leading-5 whitespace-normal'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='p-10 space-y-4 text-center bg-white rounded-2xl'> 
                <div className='flex justify-between'>
                    <p></p>
                    <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-full w-13 text-white font-bold'>02</p>
                </div>
                <img className='mx-auto' src={picPackage} alt="" />
                <h4 className='text-2xl font-bold text-[#101727]'>Choose Products</h4>
                <p className='text-[16px] text-[#627382] leading-5 whitespace-normal'>Browse our catalog and select the tools that fit your needs.</p>
            </div>
            <div className='p-10 space-y-4 text-center bg-white rounded-2xl'>
                <div className='flex justify-between'>
                    <p></p>
                    <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-3 rounded-full w-13 text-white font-bold'>03</p>
                </div>
                <img className='mx-auto' src={rocket} alt="" />
                <h4 className='text-2xl font-bold text-[#101727]'>Start Creating</h4>
                <p className='text-[16px] text-[#627382] leading-5 '>Download and start using your premium tools immediately.</p>
            </div>
        </div>
    </div>
  );
};

export default Accounts;