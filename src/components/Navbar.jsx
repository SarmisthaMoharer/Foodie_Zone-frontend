import React , {useState} from 'react';
import { AiOutlineMenu ,  AiFillTags } from "react-icons/ai";
import { IoSearchOutline ,IoCartSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import {TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineFavorite , MdHelp } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";


const Navbar = () => {
  const [nav,setNav] = useState(false)

  return (
    <div className='max-w-[1640px] flex mx-auto justify-between items-center p-4 '>
        <div className="flex items-center " >
          <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
          </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold italic text-rose-600'>Foodie <span className=' non-italic text-black '>Zone</span></h1>  
        <div className='hidden lg:flex  text-md p-1 border border-black rounded-full bg-gray-200'>   
          <p className='p-1'>Delivery</p>
          <p className='bg-blue-950 text-white rounded-full p-1'>Pickup</p>
        </div>
      </div>
      <div className='rounded-full bg-gray-300 flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <IoSearchOutline size={25} />
        <input type="text" className="bg-gray-300 p-3 w-full rounded-full focus:outline-none placeholder:text-black text-black font-thin" placeholder=' Search foods' />
      </div>
      <button className='hidden md:flex items-center rounded-full bg-black text-white py-2 '>
        <IoCartSharp className='px-1 mr-2' size={30}/> Cart
      </button>
      { nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0'></div> : ''}

      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
      <IoMdClose size={30} onClick={()=> setNav(!nav)} className='absolute right-4 top-4 cursor-pointer'/>
      <h1 className='text-2xl text-rose-600 font-bold italic'>Foodie <span className=' non-italic'>Zone</span></h1> 
      <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
          <li className='text-xl py-4 flex '><TbTruckDelivery className='mr-4' size={30}/>Orders</li>
          <li className='text-xl py-4 flex '><MdOutlineFavorite  className='mr-4' size={30}/>Favorites</li>
          <li className='text-xl py-4 flex '><FaWallet  className='mr-4' size={30}/>Wallet</li>
          <li className='text-xl py-4 flex '><MdHelp  className='mr-4' size={30}/>Help</li>
          <li className='text-xl py-4 flex '><AiFillTags  className='mr-4' size={30}/>Promotions</li>
          <li className='text-xl py-4 flex '><BsFillSaveFill className='mr-4' size={30}/>Best Ones</li>
          <li className='text-xl py-4 flex '><FaUserFriends  className='mr-4' size={30}/>Invite Friends</li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Navbar
