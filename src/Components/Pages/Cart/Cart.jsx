import React from 'react'
import ScrollToTop from '../../../ScrollToTop'

import CartProd from './CartProd'


const Cart = () => {

  const size= ["XS", "S", "M", "L" ,"XL", "XXL"]

  return (
    <>
        <ScrollToTop/>  
        <div className='mt-20 px-sectionPadding pt-10'>
          <div className='flex items-center justify-center align-middle text-4xl font-headings mb-10'>Shopping Bag</div>
          <div className='flex justify-between items-start'>
            {/* ----------- SHOPPING CART------------ */}
            <div className='w-1/2 '>
              <CartProd/>
              <CartProd/>
              <CartProd/>
              <CartProd/>
              <CartProd/>
            </div>

            {/* ----------- SUBTOTAL SECTION ------------- */}
            <div className='w-2/5 my-3 border border-typography p-6 rounded-sm'>
              {/* COUPON DISCOUNT SECTION */}
              <div className='border-b-[1px] border-gray-300 pb-2'>
                <div className=' flex items-center'>
                  <p className=' text-base font-semibold font-headings mr-2'>Coupon: </p>
                  <input type='text' className='outline-none border border-typography p-2 rounded-sm w-full' placeholder='Enter coupon code'/>
                </div>
                <button className='w-full p-2 text-base font-semibold font-texts bg-primary my-3 rounded-sm text-background'>Apply Coupon</button>
              </div>

              {/* SUBTOTAL SECTION */}
              <div className='text-base font-texts text-typography my-4 border-b-[1px] border-gray-300 pb-3'>
                <div className='flex justify-between items-center'>
                  <p>Oder Value:</p>
                  <p className='text-black font-semibold'>₹1599</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Delivery Charge:</p>
                  <p className='text-black font-semibold'>₹149</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Discount:</p>
                  <p className='text-red-600 font-semibold'>-₹300</p>
                </div>
              </div>
              <div className='flex justify-between items-center font-bold text-lg font-texts'>
                <p>Total:</p>
                <p>₹1448</p>
              </div>
              <button className='text-lg font-texts font-semibold w-full p-2 bg-primary text-background mt-4 rounded-sm'>Proceed to Checkout</button>

            </div>
        </div>
      </div>
    </>
    
  )
}

export default Cart