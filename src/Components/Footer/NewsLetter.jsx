import React from 'react'

const NewsLetter = () => {
  return (
    <div className='px-sectionPadding py-10 bg-[#1D263B] flex items-center justify-between w-full'>
        <div className='w-1/2'>
            <p className='font-headings text-3xl font-semibold text-white'>Sign Up For Newsletters</p>
            <p className='font-texts text-lg font-semibold text-white/70'>Get E-mail updates about our latest shop and Special Offers</p>
        </div>
        <div className='w-1/2 flex h-12'>
            <input type='text' className='font-texts text-typography px-4 py-2 text-base w-full rounded-l-md outline-none border-none' placeholder='Enter e-mail address'/>
            <button className='font-texts text-white bg-primary w-1/5 rounded-r-md'>Sign up</button>
        </div>
    </div>
  )
}

export default NewsLetter