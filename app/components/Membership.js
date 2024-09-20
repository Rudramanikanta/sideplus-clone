import React from 'react'
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
const Membership = () => {
    const animation={
      hidden:{y:100,opacity:0},
      visible:{y:0,opacity:1}
    }
    const data=[
      "Exclusive access to the sidemen world",
      "Comment and chat whith the community",
      "Loyalty rewards - gaming consoles, exclusive trainers, signed merch and more",
      "Uncensored and unfiltered content always",
      "Watch all the new shows and specials",
      "Monthly Zoom calls with the sidemen",
      "Weekly Q&Z with questions from the members",
      "5 series and counting with weekly releases and tons of extras",
      "Exclusive forum with the boys to chat, feedback and vibe",
      "Access to monthly sidemen dinners",
      "Cancel or pause your subscription anytine you like, no hassle",
      "Available on web , mobile and cast to your TV"
    ]
    const {ref,inView}=useInView({
      triggerOnce:true
    })
  return (
    <motion.div ref={ref} initial="hidden" variants={animation} animate={inView?"visible":"hidden"} 
    className='border-2 shadow-xl ring-neutral-600 rounded-xl border-neutral-800'>
      <p className='after:mt-3 mt-4 text-center text-3xl  mb-3 gap-y-3 font-[2000] after:flex after:h-[2px] after:bg-neutral-800  after:w-full'>MEMBERSHIP BENEFITS</p>
      <div className='grid p-10 mb-5 md:grid-cols-3'>
          <div className='gap-y-5'>
            {
              data.slice(0,4).map(
                (val,index)=>{
                  return(
                    <p key={index} className='flex mt-7 gap-x-2 align-center '><Image width={20} height={20} src="https://cdn.prod.website-files.com/60f1486c9971edb7304fc4f5/611a2ff26de5eb5ec3011966_Side_tick.svg"></Image>{val}</p>
                  )
                }
              )
            }
          </div>
          <div className='gap-y-5'>
            {
              data.slice(4,8).map(
                (val,index)=>{
                  return(
                    <p key={index} className='flex mt-7 gap-x-2 align-center '><Image width={20} height={20} src="https://cdn.prod.website-files.com/60f1486c9971edb7304fc4f5/611a2ff26de5eb5ec3011966_Side_tick.svg"></Image>{val}</p>
                  )
                }
              )
            }
          </div>
          <div>
            {
              data.slice(8,12).map(
                (val,index)=>{
                  return(
                    <p key={index} className='flex mt-7 gap-x-2 align-center '><Image width={20} height={20} src="https://cdn.prod.website-files.com/60f1486c9971edb7304fc4f5/611a2ff26de5eb5ec3011966_Side_tick.svg"></Image>{val}</p>
                  )
                }
              )
            }
          </div>
      </div>
    </motion.div>
  )
}

export default Membership