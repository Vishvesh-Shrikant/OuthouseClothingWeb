import React, { useState } from 'react'
import ScrollToTop from '../../../ScrollToTop'
import { Link } from 'react-router-dom'
import CartProd from './CartProd'


const Cart = () => {

  const [isCartEmpty, setIsCartEmpty] = useState(false)

  return (
    <>
        <ScrollToTop/>  
        <div className='mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10'>
          <div className='flex items-center justify-center align-middle text-5xl font-headings mb-10'>Shopping Bag</div>
          {
            isCartEmpty &&
            (
              <div className='text-4xl font-semibold font-texts text-typography flex flex-col justify-center items-center w-full h-full my-12'>
                    <p>Your Shopping Bag is Empty.</p>
                    <p className='text-xl font-texts'>Any items added to the bag will be visible here</p>
                    <Link to="/shop" className='flex justify-center items-center mt-3'>
                        <button className='bg-primary h-12 text-background text-2xl px-8 py-2 rounded-sm border border-typography my-3'> Continue Shopping</button>
                    </Link>
                </div>
            )
          }
          {
            !isCartEmpty &&
            (
              <>
                <div className='flex justify-between items-start max-md:flex-col'>
                  {/* ----------- SHOPPING CART------------ */}
                  <div className='w-3/5 max-[940px]:w-1/2 max-md:w-4/5 max-sm:w-full'>
                    <CartProd/>
                    <CartProd/>
                    <CartProd/>
                    <CartProd/>
                    <CartProd/>
                  </div>

                    {/* ----------- SUBTOTAL SECTION ------------- */}
                    <div className='w-1/2 max-md:w-4/5 max-sm:w-full my-3 md:ml-6 border border-typography p-6 rounded-sm'>
                      {/* COUPON DISCOUNT SECTION */}
                      <div className='border-b-[1px] border-gray-300 pb-2'>
                        <div className=' flex items-center'>
                          <p className=' text-base font-semibold font-headings mr-2'>Coupon: </p>
                          <input type='text' className='outline-none border border-typography p-2 rounded-sm w-full' placeholder='Enter coupon code'/>
                        </div>
                        <button className='w-full p-2 text-base font-semibold font-texts bg-primary my-3 rounded-sm text-background border border-typography'>Apply Coupon</button>
                      </div>

                      {/* PRICE SECTION */}
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
                      <button className='text-lg font-texts font-semibold w-full p-2 bg-primary text-background mt-4 rounded-sm border border-typography'>Proceed to Checkout</button>
                    </div>
                </div>
              </>
          )}
      </div>
    </>
    
  )
}

export default Cart