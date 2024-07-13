import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close';


const Filters = ({changeSidebar}) => {
    const priceFilter= ["0 - 999 ", "1,000 - 2,499", "2,500 - 3,999", "3,999 and above"]
    return (
          <motion.div initial={{x:"-35%", opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.4}} exit={{x:"-35%", opacity:0}} className='w-1/4 bg-background h-screen px-10 shadow-lg shadow-black'>
          <div className='top-5 right-5 absolute cursor-pointer' onClick={changeSidebar}>
            <CloseIcon/>
          </div>
          <p className='font-headings font-semibold text-2xl text-black/85 pt-20'>FILTERS & SORT </p>
          <div className='flex flex-col justify-center items-start py-5'>
            <p className='text-xl font-texts text-typography font-semibold'>By Price<span className='text-sm font-normal '>( in ₹ )</span> :</p>
            {
              priceFilter.map((price)=>(
                <div className='flex justify-start items-center px-5'>
                  <input type='checkbox' name='price_filter'/>
                <label className='text-lg font-texts text-typography px-2 font-semibold'>{price}</label>
              </div>    
              ))
            }
          </div>
        </motion.div>
    )
}

export default Filters