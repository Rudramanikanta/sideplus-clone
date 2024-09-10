"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image";
import "../globals.css";
import { useRouter } from "next/navigation"
import sideplus from "../components/sideplus.svg"
import {FaInstagram} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
const page = () => {
    const router=useRouter();
    const session=useSession();
    if(session.data==null){
        router.push("/")
    }
  return (
    <div className="">
      <div className="bg-[url('https://cdn.prod.website-files.com/60f1486c9971edb7304fc4f5/63d3c74f2c8dce26ba36947e_1673614238746.webp')] h-screen bg-center">
      <div className="flex items-center content-center justify-between p-6 text-center align-center">
        <div>
        <Image src={sideplus} width={100} height={100}></Image>
        </div>
        <div className="flex items-center content-center text-center justify-evenly align-center gap-x-2">
          <FaInstagram size={30}></FaInstagram>
          <FaXTwitter size={30}></FaXTwitter>
          <button className="p-2 border-black-100" onClick={()=>{signOut()}}>signout</button>
        </div>
      </div>
      <div className="flex justify-center mt-64 text-center">
      <div className="gap-y-10">
        <p className="font-medium">Welcome to SIDE+</p>
        <p className="mt-6 text-5xl font-semibold tracking-wider">WATCH EVERTHING HERE!</p>
        <button className="p-2 px-8 mt-4 text-xl font-semibold rounded-md button">Watch now</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default page