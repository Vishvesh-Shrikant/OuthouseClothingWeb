import React from 'react'
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'

const Banners = () => {
  return (
    <>
        <div className='px-sectionPadding flex justify-between items-center w-full mt-10'>
            <div className='w-1/2 bg-[url("/src/assets/banner1.jpg")] h-80 mr-3 bg-cover text-white font-semibold p-4'>
                <p className='lg:text-6xl'>spring/summer</p>
                <p className='text-4xl'>upcoming season</p>
                <p className='text-2xl'>The best classic dress is on sale</p>
            </div>
            <div className='w-1/2 bg-[url("/src/assets/banner2.jpg")] h-80 ml-3 bg-cover text-white font-semibold p-4'>
                <p className='lg:text-6xl'>spring/summer</p>
                <p className='text-4xl'>upcoming season</p>
                <p className='text-2xl'>The best classic dress is on sale</p>
            </div>
        </div>
    </>
  )
}


export default Banners