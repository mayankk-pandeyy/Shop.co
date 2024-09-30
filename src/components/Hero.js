import React from 'react'
import heroImg from "../images/Rectangle 2.png"

const Hero = () => {
  return (
    <div className='w-[100%] bg-[#F2F0F1]'>
        {/* Mobile */}
        <div>

        </div>

        {/* Desktop */}
        <div className='w-[90%] mx-auto relative'>
            <img src={heroImg}/>

            <div className='lg:w-[40%] md:w-[40%] sm:w-[50%] absolute top-14 flex flex-col xl:gap-10 md:gap-6 sm:gap-5 sm:top-8'>
                <div className='sm:font-extrabold font-kanit lg:text-5xl md:text-3xl xl:text-6xl sm:text-3xl'>
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </div>
                <div className='text-[#616060] sm:text-xs xl:text-base'>
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </div>
                <div className=''>
                    <button className='bg-black text-white px-6 py-3 rounded-3xl sm:text-xs md:text-lg xl:text-xl font-kanit'>Shop Now</button>
                </div>

                <div className='sm:hidden lg:block'>
                    <div className='gap-10 flex'>
                        <div className='text-center'>
                            <div className='lg:text-2xl md:text-sm'>200+</div>
                            <div className='text-[#616060] xl:text-sm md:text-xs'>International Brands</div>
                        </div>

                        <div className='text-center'>
                            <div className='lg:text-2xl md:text-sm'>2,000+</div>
                            <div className='text-[#616060] xl:text-sm md:text-xs'>High-Quality Products</div>
                        </div>

                        <div className='text-center'>
                            <div className='lg:text-2xl md:text-sm'>30,000+</div>
                            <div className='text-[#616060] xl:text-sm md:text-xs'>Happy Customers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero