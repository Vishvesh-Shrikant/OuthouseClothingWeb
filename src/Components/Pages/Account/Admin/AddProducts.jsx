import React from 'react'

const AddProducts = () => {
  return (
    <div className='mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10 font-texts text-typography'>
      {/*PERSONAL DETAILS */}
      <div className='w-full mb-10'>
        {/* NAME */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
          <p className='text-xl font-semibold mr-1'>Product Image:</p>
          <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' type='file'/>
        </div>
        {/*EMAIL ADDRESS */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
          <p className='text-xl font-semibold mr-1'>Product Title:</p>
          <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' type='text'/>
        </div>
        {/*PHONE NUMBER */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
          <p className='text-xl font-semibold mr-1'>Product Price:</p>
          <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' type='text'/>
        </div>
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
          <p className='text-xl font-semibold mr-1'>Product Description:</p>
          <textarea rows="6" className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full'/>
        </div>
      </div>
    </div>
  )
}

export default AddProducts