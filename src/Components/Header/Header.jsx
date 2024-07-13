import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Header = () => {
  return (
    <>
        <div className='h-20 w-full shadow-sm shadow-[#444444] z-50 fixed top-0 left-0 font-texts flex justify-between items-center px-sectionPadding bg-background'>
        <nav className='flex justify-between items-center w-full'>   
                {/* -----------FOR LOGO-------------  */}
                <div className='text-lg flex justify-start'>
                  <Link to='/'>HELLO WORLD</Link>
                </div>

                {/* -----------FOR WEBSITE LINKS------------ */}
                <ul className='flex justify-between items-center font-semibold text-lg w-1/2'  >
                    {/* ======== ADD LINK LOCATIONS TO THE NAVLINKS AND CHANGE COLOUR ======*/}
                    <li>
                      <NavLink to='/' className={({isActive})=>
                        `relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${isActive?'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0':'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'}`}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/shop' className={({isActive})=>
                        `relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${isActive?'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0':'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'}`}>
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/about' className={({isActive})=>
                        `relative transition duration-300 ease-in-out after:transition after:duration-300 after:ease-in-out ${isActive?'after:content-[""] after:w-2/3 after:absolute after:h-[0.13rem] text-primary after:bg-primary after:bottom-0 after:left-0':'hover:after:content-[""] hover:after:w-2/3 hover:after:absolute hover:after:h-[0.13rem] hover:text-primary hover:after:bg-primary hover:after:bottom-0 hover:after:left-0'}`}>
                        About
                      </NavLink>
                    </li> 
                    <li>
                      <NavLink to='/cart' className={({isActive})=>`transition duration-300 hover:text-primary ${isActive? 'text-primary':''} `}>
                        <ShoppingBagOutlinedIcon/>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/account' className={({isActive})=>`transition duration-300 hover:text-primary ${isActive? 'text-primary':''}`}>
                        <AccountCircleOutlinedIcon/>
                      </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Header
