import React, { useState } from 'react'
import orders from '../../../assets/Orders.jpg'
import address from '../../../assets/address.png'
import account from '../../../assets/account.png'
import payment from '../../../assets/payment.png'
import contactus from '../../../assets/contactus.png'
import ScrollToTop from '../../../ScrollToTop'
import { Link } from 'react-router-dom'




const Account = () => {
    const [loggedin, setLoggedin] = useState(false)
  return (
    <>
        <ScrollToTop/>
        <div className='mt-20 px-sectionPadding'>
            <div className='mt-10 text-typography'>
                <p className='text-4xl font-headings text-black font-semibold'>YOUR ACCOUNT</p>
                {/* ------------------- YOUR ORDERS ------------------ */}
                <div className='grid grid-cols-3 justify-between my-10 gap-10 '>
                  <Link to='/account/my-orders' className=' px-4 py-6 border border-typography  flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10'>
                    <img src={orders} className='h-28 p-2'/>
                    <div className='h-full flex flex-col justify-center items-start py-6 '>
                      <p className='text-xl font-bold'>Your Orders</p>
                      <p className='text-sm '>View, Track and Return your orders here</p>
                    </div>
                  </Link>
                  {/* -------------------ACCOUNT DETAILS ------------------ */}
                  <div className='  px-4 py-6 border border-typography  flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10'>
                    <img src={account} className='h-28 p-2'/>
                    <div className='h-full flex flex-col justify-center items-start py-6 '>
                      <p className='text-xl font-bold'>Account Details</p>
                      <p className='text-sm '>View, Track and Return your orders here</p>
                    </div>
                  </div>
                  {/* ------------------- PAYMENT OPTIONS ------------------ */}
                  <div className=' px-4 py-6 border border-typography  flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10'>
                    <img src={payment} className='h-28 p-2'/>
                    <div className='h-full flex flex-col justify-center items-start py-6 '>
                      <p className='text-xl font-bold'>Payment Options</p>
                      <p className='text-sm '>View, Track and Return your orders here</p>
                    </div>
                  </div>
                  
                  {/* ------------------- ADDRESSES ------------------ */}
                  <div className='  px-4 py-6 border border-typography  flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10'>
                    <img src={address} className='h-28 p-2 '/>
                    <div className='h-full flex flex-col justify-center items-start py-6 '>
                      <p className='text-xl font-bold'>Addresses</p>
                      <p className='text-sm '>View and Edit addresses for orders and gifts</p>
                    </div>
                  </div>
                  {/* ------------------- CUSTOMER CARE ------------------ */}
                  <div className=' px-4 py-6 border border-typography  flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10'>
                    <img src={contactus} className='h-28 p-2'/>
                    <div className='h-full flex flex-col justify-center items-start py-6'>
                      <p className='text-xl font-bold'>Contact us</p>
                      <p className='text-sm '>Contact for hlep or customer care</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Account