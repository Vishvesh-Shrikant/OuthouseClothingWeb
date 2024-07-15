import React, { useState } from 'react'
import img1 from '../../../assets/trial1.jpg'
import ScrollToTop from '../../../ScrollToTop.jsx'
import { NavLink } from 'react-router-dom'


const SingleProductDetail = () => {
  const sizes=[
    {
      id:1, size:"XS"
    },
    {
      id:2, size:"S"
    },
    {
      id:3, size:"M"
    },
    {
      id:4, size:"L"
    },
    {
      id:5, size:"XL"
    },
    {
      id:6, size:"XXL"
  }]

  const [selectedSize, setSelectedSize]=useState()

  const [quantity, setQuantity]= useState(1)
  const increment=()=>{
    if(quantity==15)
      return
    else 
      setQuantity(prev => prev+1)
  }
  const decrement=()=>{
    if(quantity==1)
      return
    else
      setQuantity(prev => prev-1)
  }


  return (
    <>
      <ScrollToTop/>
      <div className='w-full mt-20 px-sectionPadding pt-sectionPadding  '>
        <div className='flex justify-between w-full'>
          {/* IMAGES */}
          <div className='w-1/2 flex flex-col items-start'>
            <div className='w-full bg-gray-200'>
              <img src={img1} alt="" />
            </div>
            <div className='grid grid-cols-4 gap-x-4 my-3'>
              <div className='w-full bg-gray-200'>
                <img src={img1} alt="" />
              </div>
              <div className='w-full bg-gray-200'>
                <img src={img1} alt="" />
              </div>
              <div className='w-full bg-gray-200'>
                <img src={img1} alt="" />
              </div>
            </div>
          </div>



          <div className='flex flex-col items-start justify-center w-1/2 ml-20'>
            <p className='text-5xl font-semibold font-texts'>H&M White Hoodie</p>
            <p className='text-3xl font-semibold font-headings my-1'>₹1599</p>
            <p className='text-base font-semibold font-texts'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, neque cum corrupti ad consectetur recusandae numquam? Exercitationem placeat fugit a deserunt nemo enim repellendus cupiditate? Ex vero nemo officia optio.
            Nobis impedit ratione, rem maxime iusto ipsum id velit est voluptatum odio eveniet qui </p>
            
            {/* SIZES SECTION */}
            <div className='w-full my-6'>
              <p className='font-texts font-semibold text-2xl mb-2'>Sizes:</p>
              <div className='grid grid-cols-4 gap-x-10 gap-y-3'>
                {
                  sizes.map((size)=>(
                    <div className={selectedSize==size.id?'flex justify-center items-center border border-typography p-2 cursor-pointer duration-200 ease-linear bg-primary text-background':'flex justify-center items-center text-black border border-typography p-2 cursor-pointer duration-200 ease-linear'} value={size.size} key={size.id} onClick={()=>{setSelectedSize(size.id)}}>
                      <p className='font-texts font-semibold text-lg'>{size.size}</p>
                    </div>
                  ))
                }
              </div>
            </div>

            {/* QUANTITY*/}
            <div className='w-full flex items-center mb-5'>
              <p className='text-2xl font-texts font-semibold mr-3'>Quantity:</p>
              <div className='flex text-2xl font-texts font-semibold border border-typography rounded-sm '>
                <button className='px-3 py-1' onClick={decrement} >-</button>
                <p className='px-3 border-x-[1px] border-typography py-1'>{quantity}</p>
                <button className='px-3 py-1' onClick={increment} >+</button>
              </div>
            </div>
            <div className='w-full text-2xl font-semibold font-texts flex items-center justify-center text-background'>
              <button className='px-2 py-2 border border-typography rounded-sm bg-primary w-full'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </> 
  )


}

export default SingleProductDetail