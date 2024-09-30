import React from 'react'
import versache from "../images/versache.png"
import zara from "../images/zara.png"
import gucci from "../images/gucci.png"
import prada from "../images/prada.png"
import calvin from "../images/calvin.png"

const Brands = () => {
  return (
    <div className='bg-black w-[100%]'>
        <div className='flex w-[40%]'>
            <img src={versache} alt='versache' className='scale-50'/>
            <img src={zara} alt='zara' className='scale-50'/>
            <img src={gucci} alt='gucci' className='scale-50'/>
            <img src={prada} alt='prada' className='scale-50'/>
            <img src={calvin} alt='Calvin' className='scale-50'/>
        </div>
    </div>
  )
}

export default Brands