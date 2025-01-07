import React from 'react'

const Bottom = () => {
  return (
    <div className='bg-[#141414] h-[50vh] block'>
      <div>
      <div>
        
      </div>
        <div className='p-10 md:flex'>
            <div className='p-10 bg-black border-black shadow-md bg-opacity-40 h-fit w-fit rounded-xl ring-1 ring-white border-1'>
                <p className='text-white text-md'>Latest News</p>
                <p className='mt-3 text-sm text-neutral-400 '>Chuck your emial in here to stay up to date with all things Sidemen, direct to your inbox</p>
                <input className='p-3 mt-2 bg-neutral-600/10 hover:border-2 hover:border-blue-700 ' placeholder='send email'></input>
                <p>By entering your email you hereby accept our terms and conditions</p>
            </div>
           
        </div>
        </div>
        <p className='p-10 mt-20 bg-[#141414]'>Copyright Sidemen Entertainment Limited All Rights Reserved TM 2025 -<a className='text-white ' href="http://www.protfolio-3d-rudra.vercel.app"> Site by Rudra Manikanta</a></p>
    </div>
  )
}

export default Bottom