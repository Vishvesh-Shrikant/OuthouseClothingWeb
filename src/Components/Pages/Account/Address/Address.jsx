import React from 'react'

const Address = () => {
  return (
    <div className='mt-20 px-sectionPadding max-md:px-mobileScreenPadding pt-10 font-texts text-typography'>
        <div className='w-full mb-10'>
        <p className='text-base text-black/70 border-b-2'>Address Details</p>
        {/* NAME */}
        <div className='flex justify-between items-center max-sm:w-full max-sm:flex-col my-5'>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>First Name:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>Last Name:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
        </div>
        {/*PHONE NUMBER */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
          <p className='text-xl font-semibold mr-1'>Phone Number:</p>
          <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' type='text'/>
        </div>
        {/* ADDRESS OF  */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
          <p className='text-xl font-semibold mr-1'>Address of: </p>
          <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' type='text'/>
        </div>
        {/*HOUSE NAME AND FLAT NO */}
        <div className='flex justify-between items-center max-sm:w-full max-sm:flex-col my-5'>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>Flat number:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>Building name:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
        </div>
        {/* STREET  */}
        <div className='flex flex-col justify-center items-start w-1/2 max-sm:w-full my-5'>
          <p className='text-xl font-semibold mr-1'>Address of: </p>
          <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-full' type='text'/>
        </div>
        {/* TOWN AND CITY */}
        <div className='flex justify-between items-center max-sm:w-full max-sm:flex-col my-5'>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>Town</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>City:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>PIN CODE: </p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
        </div>
        {/* STATE AND COUNTRY  */}
        <div className='flex justify-between items-center max-sm:w-full max-sm:flex-col my-5'>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>Flat number:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
          <div className='flex flex-col justify-center items-start w-full max-sm:my-2'>
              <p className='text-xl font-semibold mr-1'>Building name:</p>
              <input className='border border-typography outline-none font-semibold p-1 text-lg rounded w-5/6 max-sm:w-full' type='text'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address