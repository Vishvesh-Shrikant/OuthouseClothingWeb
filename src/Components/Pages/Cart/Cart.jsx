import React from 'react'
import ScrollToTop from '../../../ScrollToTop'

import CartProd from './CartProd'


const Cart = () => {

  const size= ["XS", "S", "M", "L" ,"XL", "XXL"]

  return (
    <>
        <ScrollToTop/>  
        <div className='mt-20 p-sectionPadding'>
          <div className='flex justify-between items-start'>
            {/* ----------- SHOPPING CART------------ */}
            <div className='w-1/2 '>
              <CartProd/>
              <CartProd/>
              <CartProd/>
              <CartProd/>
              <CartProd/>
            </div>

            {/* ----------- SUBTOTAL SECTION ------------- */}
            <div className='w-2/5 h-1/2 my-5'> </div>
          </div>
        </div>
    </>
    
  )
}

export default Cart