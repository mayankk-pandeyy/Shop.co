import React from 'react'
import cart from "../images/icons/cart.png"
import user from "../images/icons/user.png"


const Navbar = () => {
  return (
    <div className='w-[95%] mx-auto my-3'>
        {/* Mobile */}
        <div className='sm:hidden visible'>
            <div>
                <img src=''/>
                <div className=''>SHOP.CO</div>
            </div>
            <div>
                <img src=''/>
                <img src=''/>
                <img src={cart} alt="Dot" />
            </div>
        </div>

        {/* Desktop */}
        <div className='sm:flex hidden sm:visible justify-between sm:items-center sm:gap-1 md:gap3'>
            {/* Logo */}
            <div className='font-extrabold text-3xl font-kanit'>SHOP.CO</div>
            <div className='flex md:gap-3 sm:gap-2 items-center sm:text-xs md:text-base lg:gap-6'>
                <div>Shop</div>
                <div>OnSale</div>
                <div>New Arrivals</div>
                <div>Brands</div>
            </div>

            {/* Search Bar */}
            <div className='sm:w-[30%] md:w-[35%]'>
                <input type='text' placeholder='Seach for products...' className='outline-none border w-[100%] rounded-3xl py-2 px-6 border-black'/>
            </div>

            {/* Carts */}
            <div className='flex items-center lg:gap-2'>
                <img src={cart} alt='cart' className='scale-75'/>

                <div>
                    <img src={user} alt='user' className='scale-75'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar