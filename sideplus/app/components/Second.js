"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const Second = ({images,prev,buttonText,image}) => {
    const animation2={
        hidden:{y:-100,opacity:0},
        visible:{y:0,opacity:100}
    }
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    
    
    
    const animation = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }

    
    return (
        <motion.div className='mb-24'  ref={ref} variants={animation} initial="hidden" animate={inView? "visible" : "hidden"}>
            <div className='flex justify-between p-10'>
                <div className='items-center content-center md:flex md:align-middle'>
                    <Image src={image}  alt="Series banner" className='h-[100px] w-[150px] object-contain'/>
                    <p className='ml-10'>Exclusive series just for sideplus+ members</p>
                </div>
                <button className='px-4 py-4 rounded-md bg-neutral-400/10 h-fit w-fit'>{buttonText}</button>
            </div>
            <div className='grid grid-cols-2 px-10 lg:grid-cols-4 gap-x-4 '>
                {images.map((val, index) => (
                    <div key={index} style={{ backgroundImage: `url(${val.img})` }} className="relative  group block bg-center bg-cover h-[400px] rounded-lg overflow-hidden  item hover:bg-opacity-50 ">
                        <motion.button variants={animation2} initial="hidden" animate="visible" className='absolute left-[-4] ml-[-10] hidden px-3 font-semibold text-black bg-white rounded-md group-hover:block bottom-10 '><p className='ml-10'>{val.button}</p></motion.button>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Second
