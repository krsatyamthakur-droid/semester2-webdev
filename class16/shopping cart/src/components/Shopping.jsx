import React from 'react'

const Shopping = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='text black text-4xl font-bold mt-2'>
       Shopping cart
      </div>
      <div className='text black text-1xl items-center  mt-2'>
        <div><h1 className='font-bold'>Add product</h1></div>
        <div className='mt-6  flex gap-x-7'>
          <input type="text" placeholder='Product name'  className='border-amber-100'/>
          <input type="text" placeholder='Product price' className='border-amber-100'/>
          <button className='bg-blue-500 text-white py-2 px-4 rounded'>Add to cart </button>
        </div>
       
      </div>

    </div>
  )
};
 // cart items
//  const CartItems = () => {
// return(
  
// )
//  }
export  {Shopping};
