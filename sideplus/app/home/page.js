"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import "../globals.css";
import { useRouter } from "next/navigation";
import sideplus from "../components/sideplus.svg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
const page = () => {
  const router = useRouter();
  const session = useSession();
  if (session.data == null) {
    router.push("/");
  }
  const big=useRef(null)
  const {scrollYProgress}=useScroll({
    target:big,
    offset:["start end","end start"]
  })
  const scale=useTransform(scrollYProgress,[0,1],[1,1.3])
  useEffect(()=>{
    scrollYProgress.onChange((val)=>{
      console.log(val)
    })
  })
  return (
    <div className="bg-[#171717]">
      <div className="bg-[url('https://cdn.prod.website-files.com/60f1486c9971edb7304fc4f5/63d3c74f2c8dce26ba36947e_1673614238746.webp')] h-screen bg-center">
        <div className="flex items-center content-center justify-between p-6 text-center align-center">
          <div>
            <Image src={sideplus} width={100} height={100}></Image>
          </div>
          <div className="flex items-center content-center text-center justify-evenly align-center gap-x-2">
            <FaInstagram size={30}></FaInstagram>
            <FaXTwitter size={30}></FaXTwitter>
            <button
              className="p-2 border-black-100"
              onClick={() => {
                signOut();
              }}
            >
              signout
            </button>
          </div>
        </div>
        <div ref={big} className="flex justify-center mt-64 text-center">
          <div className="gap-y-10">
            <motion.p style={{scale}} className="font-medium">Welcome to SIDE+</motion.p>
            <motion.p style={{scale}} className="mt-6 text-5xl font-semibold tracking-wider">
              WATCH EVERTHING HERE!
            </motion.p>
            <motion.button style={{scale}} className="p-2 px-8 mt-4 text-xl font-semibold rounded-md button">
              Watch now
            </motion.button>
          </div>
        </div>
      </div>
      <div className="h-[100vh] block">
        
      </div>
    </div>
  );
};

export default page;
