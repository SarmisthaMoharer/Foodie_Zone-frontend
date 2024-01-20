import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative hover:scale-105'>
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl '>
                <p className='font-bold text-2xl px-2 pt-4'>QYC's Out , AHYAT's Out</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl " src="src/assets/anna-przepiorka-P7BBkQ9vLgU-unsplash.jpg" alt="" />
        </div>

        <div className='rounded-xl relative hover:scale-105'>
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl '>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl " src="src/assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" alt="" />
        </div>

        <div className='rounded-xl relative hover:scale-105 '>
            <div className='absolute w-full h-full bg-black/40 text-white rounded-xl '>
                <p className='font-bold text-2xl px-2 pt-4'>Desserts</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl " src="src/assets/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg" alt="" />
        </div>
    </div>
  )
}

export default Cards
