import React from 'react'
import { motion } from 'framer-motion'
import Prize from "../home/third.svg"
import Image from "next/image"
import { useInView } from 'react-intersection-observer'
export const Third = () => {
    const {ref,inView}=useInView({
        triggerOnce:true
    })
    const animation = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      };
  return (
    <motion.div ref={ref} initial="hidden" className='p-4 rounded-lg h-fit w-fit group hover:bg-neutral-400/10' animate={inView ? "visible" : "hidden"} variants={animation}>
        <Image src={Prize}  className='w-full h-full '></Image>
        <p className='text-sm font-thin w-[300px] group-hover:opacity-100 translate-y-1/4 group-hover:translate-y-0 duration-300 transform text-center opacity-0  text-neutral-500 tracking-wide leading-5 align-center'>Monthly Loyalty rewards for members like next-gen console, iphones , clothing and Sidemen memorabilla</p>
    </motion.div>
  )
}
