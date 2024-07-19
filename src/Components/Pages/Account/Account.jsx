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
        <div className='mt-20 px-sectionPadding max-md:px-mobileScreenPadding'>
            <div className='mt-10 text-typography'>
                <p className='text-4xl max-mobileM:text-3xl font-headings text-black font-semibold'>YOUR ACCOUNT</p>
                {/* ------------------- YOUR ORDERS ------------------ */}
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between my-10 gap-10 '>
                  <Link to='/account/my-orders' className=' px-4 py-6 border border-typography  flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10 max-sm:w-3/4 max-[470px]:w-full'>
                    <img src={orders} className='h-28 max-mobileM:h-24 p-2'/>
                    <div className='h-full flex flex-col justify-center items-start py-6 '>
                      <p className='text-xl font-bold'>Your Orders</p>
                      <p className='text-sm '>View, Track and Return your orders here</p>
                    </div>
                  </Link>
                  {/* -------------------ACCOUNT DETAILS ------------------ */}                 
                  <Link to='/account/account-details' className='  px-4 py-6 border border-typography flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10 max-sm:w-3/4 max-[470px]:w-full'>
                    <img src={account} className='h-28 max-mobileM:h-24 p-2'/>
                    <div className='h-full flex flex-col justify-center items-start py-6 '>
                      <p className='text-xl font-bold'>Account Details</p>
                      <p className='text-sm '>Get your account details here</p>
                    </div>
                  </Link>
                  {/* ------------------- ADDRESSES ------------------ */}
                  <div className='  px-4 py-6 border border-typography  flex justify-between items-center font-texts font-semibold rounded-md cursor-pointer hover:bg-gray-400/10 max-sm:w-3/4 max-[470px]:w-full'>
                    <img src={address} className='h-28 max-mobileM:h-24 p-2 '/>
                    <div className='h-full flex flex-col justify-center items-start py-6 '>
                      <p className='text-xl font-bold'>Addresses</p>
                      <p className='text-sm '>View and Edit addresses for orders and gifts</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Account