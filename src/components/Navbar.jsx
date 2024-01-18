import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
        <div>
            <div className='flex m-2 space-x-2'>
                <AiOutlineMenu className="" size={30}/>
                <h1 className='text-2xl '>Foodie <span>Zone</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar
