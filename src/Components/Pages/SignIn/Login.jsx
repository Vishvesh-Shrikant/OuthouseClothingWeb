import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col mx-3 font-texts my-5 '>
        <div className=' flex flex-col justify-start w-full'>
            <p className='font-semibold my-2'>Username or email address </p>
            <input type='text' className='border border-typography outline-none h-8 px-2 py-5 rounded-sm'/>
        </div>
        <div className=' flex flex-col justify-start w-full my-2'>
            <p className='font-semibold my-2'>Password</p>
            <input type='text' className='border border-typography outline-none h-8 px-2 py-5 rounded-sm'/>
            <p className='text-typography text-[12px] hover:text-black hover:underline font-semibold mt-1 duration-200 ease-in-out '>Forgot Passowrd?</p>
        </div>
        <div className='mt-6 flex flex-col justify-center items-start'>
            <button className='bg-primary hover:shadow hover:shadow-black/40 text-white p-2 w-2/5 text-lg font-semibold rounded-sm my-2 duration-200 ease-in-out'>LOG IN</button>
            <div className='flex justify-center items-center'>
                <input type='checkbox'/>
                <p className='text-sm mx-2'>Remember me</p>
            </div>
        </div>
    </div>
  )
}

export default Login