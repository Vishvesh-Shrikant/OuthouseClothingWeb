import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-col mx-3 font-texts my-5'>
        <div className=' flex flex-col justify-start w-full my-2'>
            <p className='font-semibold '> Username </p>
            <input type='text' className='border border-typography outline-none h-8 px-2 py-5 rounded-sm'/>
        </div>
        <div className=' flex flex-col justify-start w-full my-2'>
            <p className='font-semibold '>Email address </p>
            <input type='text' className='border border-typography outline-none h-8 px-2 py-5 rounded-sm'/>
        </div>
        <div className=' flex flex-col justify-start w-full my-2'>
            <p className='font-semibold '>Password</p>
            <input type='text' className='border border-typography outline-none h-8 px-2 py-5 rounded-sm'/>
        </div>
        <div className='mt-6 flex flex-col justify-center items-start'>
            <button className='bg-primary hover:shadow hover:shadow-black/40 text-white p-2 w-full text-lg font-semibold rounded-sm my-2 duration-200 ease-in-out'>REGISTER</button>
            <div className='flex justify-center items-center'>
            </div>
        </div>
    </div>
  )
}

export default Register