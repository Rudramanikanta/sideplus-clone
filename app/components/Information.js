"use client"
import React, { useState,useEffect } from 'react'
import {IoIosArrowDown} from "react-icons/io"
import { twMerge } from 'tailwind-merge'
const Information = ({title,info}) => {
    const [rev,setrev]=useState(false)
  return (
    <div className='border-2 rounded-md shadow-md border-neutral-800' onClick={()=>setrev((curr)=>!curr)}>
        <div className='flex justify-between p-4'>
            <p className='ml-3 text-lg font-semibold'>{title}</p>
            <p className='mr-2'><IoIosArrowDown className={rev?"rotate-180 transition-all text-md font-semibold transform duration-200 ":"text-md transition-all font-semibold transform duration-200 rotate-0"}/></p>
        </div>
        {
            rev &&
            <div className='p-4'>
                <p className='leading-8 tracking-wide text-neutral-600'>{info}</p>
            </div>
        }
    </div>
  )
}

export default Information