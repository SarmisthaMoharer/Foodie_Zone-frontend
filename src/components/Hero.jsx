import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'> 
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic'>The <span  className='text-rose-500'>Best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic text-rose-500'>Foods <span className='text-white'>Delivered</span></h1>
        </div>
        <img className="w-full max-h-[500px] object-cover" src="src/assets/tim-toomey-GH2JWMhZTxM-unsplash.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero
