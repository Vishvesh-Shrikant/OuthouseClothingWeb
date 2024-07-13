import React from 'react'
import trial1 from '../../../assets/trial1.jpg'
import StarIcon from '@mui/icons-material/Star';

const SingleProduct = () => {
  return (
    <>
        <div className='flex flex-col items-start justify-start rounded-lg border border-typography p-3 my-5 text-typography shadow-sm shadow-gray-600'>
            <div className='bg-gray-200 rounded-lg'>
                <img src={trial1} className='h-full'/>
            </div>
            <div className='mx-1 mt-4'>
                  <p className='font-semibold text-xl font-texts'>H&M White Hoodie</p>
                  <p className='text-lg text-typography font-headings font-semibold'>₹1599</p>
                  <div className='flex text-[#fbb523] '>
                    <StarIcon style={{fontSize:"large"}}/>
                    <StarIcon style={{fontSize:"large"}}/>
                    <StarIcon style={{fontSize:"large"}}/>
                    <StarIcon style={{fontSize:"large"}}/>
                    <StarIcon style={{fontSize:"large"}}/>
                  </div>
                </div>
        </div>
    </>
  )
}

export default SingleProduct