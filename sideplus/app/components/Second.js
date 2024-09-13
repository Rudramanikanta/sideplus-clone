"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import image from "./image.png"

const Second = () => {
    const animation2={
        hidden:{y:-100,opacity:0},
        visible:{y:0,opacity:100}
    }
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const padding = useTransform(scrollYProgress, [0, 1], ["150px", "-200px"])
    
    const animation = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }

    const images = [
        {
            button: "GAME SHOWS",
            img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/6659ac5b8c9fa4ed8d90e4fe_Game-Covers-Banner-.webp"
        },
        {
            button: "THE SIDECAST",
            img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/645a242382a2fe03e3463e37_SIDECAST-POSTER.webp"
        },
        {
            button: "GUESTCAST",
            img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/645a2439b999bb95fc2e51e0_GUESTCAST-POSTER.webp"
        },
        {
            button: "SIDE+ SATURDAYS",
            img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/66757e4102128f46509a7c73_65dc98e1670dd62f61a78684_Side%2B-Saturdays-Banner1.jpg"
        }
    ]

    return (
        <motion.div style={{ marginTop: padding }} ref={ref} variants={animation} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <div className='flex justify-between p-10'>
                <div className='items-center content-center md:flex md:align-middle'>
                    <Image src={image} height={120} width={120} alt="Series banner" />
                    <p className='ml-10'>Exclusive series just for sideplus+ members</p>
                </div>
                <button className='px-4 py-4 rounded-md bg-neutral-400/10 h-fit w-fit'>Join to watch</button>
            </div>
            <div className='grid grid-cols-2 px-10 lg:grid-cols-4 gap-x-4 '>
                {images.map((val, index) => (
                    <div key={index} style={{ backgroundImage: `url(${val.img})` }} className="relative  group block bg-center bg-cover h-[400px] rounded-lg overflow-hidden  item hover:bg-opacity-50 ">
                        <motion.button variants={animation2} initial="hidden" animate="visible" className='absolute hidden px-3 font-semibold text-black bg-white rounded-md group-hover:block bottom-10 ml-[-2]'>{val.button}</motion.button>
                    </div>
                ))}
            </div>
            <div className='h-[50vh]'>
                
            </div>
        </motion.div>
    )
}

export default Second
