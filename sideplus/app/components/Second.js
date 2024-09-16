"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Second = ({ images, prev, buttonText, image, side }) => {
 
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const animation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="mb-24"
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex justify-between p-10">
        <div className="items-center content-center md:flex md:align-middle">
          <Image
            src={image}
            alt="Series banner"
            className="h-[100px] w-[150px] object-contain "
          />
          <p className="ml-10">{side}</p>
        </div>
        <button className="px-4 py-4 rounded-md bg-neutral-400/10 h-fit w-fit">
          {buttonText}
        </button>
      </div>
      <div className="grid grid-cols-2 px-10 lg:grid-cols-4 gap-x-4 ">
        {images.map((val, index) => (
          <div
          key={index}
          style={{ backgroundImage: `url(${val.img})` }}
          className="relative group block bg-center h-[380px] rounded-lg overflow-hidden  bg-no-repeat transform hover:bg-neutral-400 bg-cover  duration-300 animate   transition-all ease-in hover:bg-large hover:opacity-65"
        >
          <button
            className="absolute flex px-3 font-bold text-black transition-all duration-300 ease-in transform bg-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 rounded-r-md bottom-10 -translate-y-1/4"
          >
            <p className="ml-6 font-extrabold text-md">{val.button}</p>
          </button>
        </div>
        
        ))}
      </div>
     
    </motion.div>
  );
};

export default Second;
