"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import image from "./image.png"
const Second = () => {
    const {ref,inView}=useInView({
        triggerOnce:true,
        
    })
    const {scrollYProgress}=useScroll({
        target:"ref",
        offset:["start end","end start"]
    })
    const padding=useTransform(scrollYProgress,[0,1],["100px","-190px"])
    const animation={
        hidden:{y:100,opacity:0},
        visible:{y:0,opacity:1}
    }
    useEffect(()=>{
        scrollYProgress.onChange((val)=>{
           console.log(val) 
        })
    })
  return (
    <motion.div style={{marginTop:padding}} ref={ref} variants={animation}  initial="hidden" animate={inView?"visible":"hidden"}>
        <div className='flex justify-between p-10'>
            <div className='items-center content-center md:flex md:align-middle'>
            <Image src={image} height={120} width={120}></Image>
            <p className='ml-10'>Exclusive series just for sideplus+ members</p>
            </div>
            <button className='px-4 py-4 rounded-md bg-neutral-400/10 h-fit w-fit'>Join to watch</button>
        </div>
        <div className='h-[100vh]'>
            
        </div>
    </motion.div>
  )
}

export default Second