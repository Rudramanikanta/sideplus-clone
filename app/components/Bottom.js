import React from 'react'

const Bottom = () => {
  return (
    <div className='bg-[#141414] h-[50vh] block'>
        <div className='p-10 md:flex'>
            <div>
                <p className='text-white text-md'>Latest News</p>
                <p className='mt-3 text-sm text-neutral-400 '>Chuck your emial in here to stay up to date with all things Sidemen, direct to your inboc</p>
                <input className='p-3 mt-2 bg-neutral-600/10 hover:border-2 hover:border-blue-700 ' placeholder='send email'></input>
            </div>
           
        </div>
    </div>
  )
}

export default Bottom