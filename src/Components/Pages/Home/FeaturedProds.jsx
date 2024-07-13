import React from 'react'

import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom'

const FeaturedProds = () => {
  return (
    <>
        <div className=' px-sectionPadding p-10 text-typography w-full'>
            <div className='flex flex-col justify-center items-center'>
                <p className=' font-headings text-5xl'>Featured Products</p>
                <p className='text-base font-texts my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus aut</p>
            </div>
            
            <div className='grid grid-cols-3 gap-x-6 my-10'>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
            </div>

            <div className='w-full flex justify-center items-center'>
              <Link to="/shop">
                <button className='text-typography transition duration-250 ease-in-out hover:bg-primary hover:text-white hover:border-white border-typography border px-10 py-2 text-xl font-headings font-semibold'>
                  View All Products
                </button>
              </Link>
            </div>
        </div>


    </>
  )
}

export default FeaturedProds