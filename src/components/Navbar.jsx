import React from 'react'
import { FaShoppingCart  } from 'react-icons/fa'

export const Navbar = ({count,setActiveTab, activeTab}) => {
  console.log(count)
  return (
    <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
    </div>
    <a className=" font-bold p-3 text-4xl bg-clip-text btn-ghost  text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    {/* <ul className="menu menu-horizontal px-1">
        <li className='cursor-pointer'><a>Products</a></li>
        <li className='cursor-pointer'><a >Features</a></li>
        <li className='cursor-pointer'><a >Pricing</a></li>
        <li className='cursor-pointer'><a>Testimonials</a></li>
        <li className='cursor-pointer'><a>FAQ</a></li>
    </ul> */}
    <ul
        tabIndex="-1"
        className="flex gap-5">
        <li className='cursor-pointer'><a>Products</a></li>
        <li className='cursor-pointer'><a >Features</a></li>
        <li className='cursor-pointer'><a >Pricing</a></li>
        <li className='cursor-pointer'><a>Testimonials</a></li>
        <li className='cursor-pointer'><a>FAQ</a></li>
        
      </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <div className='flex relative'>
      <p className={`${count === 0 ? "hidden" : "bg-red-700 px-2 text-white z-1  text-center font-bold transform translate-x-1/2 -translate-y-1/2 rounded-full absolute top-0 right-0 "}`}>{count}</p>
      <FaShoppingCart  onClick={()=> setActiveTab("Cart")}  size={34} className={`cursor-pointer ${activeTab === 'Cart'}`}></FaShoppingCart>
    </div>
    <a className=' btn hidden sm:flex bg-gradient-to-r from-[#dd18e4] to-[#f35ce6] rounded-3xl cursor-pointer font-semibold text-white'>Login</a>
    <a className=" btn hidden sm:flex bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  rounded-3xl text-white">Get Started</a>
  </div>
</div>
  )
}
