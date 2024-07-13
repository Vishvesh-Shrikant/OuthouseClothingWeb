import React from 'react'
import img1 from '../../../assets/trial1.jpg'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const CartProd = () => {
  return (
    <>
        <div className='flex items-center relative border border-typography rounded-sm px-2 py-4 my-3'>
            <img src={img1} className='w-2/5 h-full'/>
            <div className='flex justify-start items-start'>
                {/* PRODUCT INFORMATION */}
                <div>
                    <p className='font-semibold text-2xl font-texts'>H&M White Hoodie</p>
                    <p className='text-xl text-typography font-headings font-semibold'>₹1599</p>
                    <p className='text-lg  text-typography font-texts font-bold'>Size: M</p>
                    <div className=' font-texts font-semibold'>
                        <label className='text-base '>Quantity:</label>
                        <select className=' outline-none border border-typography p-1 mx-1 rounded-sm bg-none cursor-pointer'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>   
            </div>
            <div className=' absolute top-2 right-2 hover:cursor-pointer'>
                <DeleteOutlineOutlinedIcon/>
            </div>
            
        </div>
    </>
  )
}

export default CartProd