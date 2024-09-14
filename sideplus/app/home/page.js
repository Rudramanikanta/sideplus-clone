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
import Second from "../components/Second";
import image from "./image.png"
import BTS from "./BTS.svg"
import Third from "./third.svg"
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
const ref=useRef(null);
const mar = useScroll({
  target: ref,
  offset: ["start end", "start start"],
})
const  padding=useTransform(mar?.scrollYProgress, [0, 1], ["100px", "-80px"]);

useEffect(()=>{
  mar.scrollYProgress.onChange((val)=>{
    console.log(val)
  })
})
  const scale=useTransform(scrollYProgress,[0,1],[1,1.3])
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
      <motion.div ref={ref} style={{marginTop:padding}}>
      <Second images={images} prev={true} buttonText="Join to Watch" image={image}></Second>
      <Second images={images} prev={false} buttonText="See all" image={BTS}></Second>
      <Second images={images} prev={false} buttonText="See all loyalty rewards" image={Third}></Second>
      </motion.div>
    </div>
  );
};

export default page;
