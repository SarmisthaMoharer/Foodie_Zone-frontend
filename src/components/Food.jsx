import React ,{useState} from 'react'
import {data} from '../data/Data.js'

const Food = () => {
   const[foods,setFoods]=useState(data)

    const filterType = (catagory) => {
        setFoods(
            data.filter((item)=> {
                return item.category === catagory ;
            })
        )
    }

    const filterPrice = (price) => {
        setFoods(
            data.filter((item)=> {
                return item.price === price ;
            })
        )
    }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
        <h1 className='text-rose-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      <div className='flex flex-col lg:flex-row justify-between'></div>
        <div>
            <p className='font-bold text-gray-800'>Filter Type</p>
            <div className='flex justify-between flex-auto'>
                <button onClick={()=> setFoods(data)} className='m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white'>All</button>
                <button onClick={()=> filterType('burger')} className='m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white'>Burgers</button>
                <button onClick={()=> filterType('pizza')} className='m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white'>Pizza</button>
                <button onClick={()=> filterType('salad')} className='m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white'>Salads</button>
                <button onClick={()=> filterType('chicken')} className='m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white'>Chicken</button>
                <button onClick={()=> filterType('others')} className='m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white'>Others</button>
            </div>
        </div>

        <div>
            <p className='font-bold text-gray-800'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={()=> filterPrice('199')}className="m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white">199</button>
                <button onClick={()=> filterPrice('299')} className='m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white'>299</button>
                <button onClick={()=> filterPrice('399')} className='m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white'>399</button>
                <button onClick={()=> filterPrice('499')} className='m-1 text-rose-600 border-rose-600 bg-white hover:bg-rose-600 hover:text-white'>499</button>
            </div>
        </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item ,index)=>(
            <div key={index} className='border shadow-lg transition-shadow ease-linear hover:scale-110 duration-300 rounded-lg'>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'  />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-rose-600 text-white p-1 rounded-full'>{item.price}</span>
                    </p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Food
