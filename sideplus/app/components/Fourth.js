"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
const Fourth = () => {
  const animation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-[url('/bgfour.webp')] rounded-[20px]  w-full bg-center bg-no-repeat
     bg-cover block  p-9"
      variants={animation}
    >
      <Image
        src="https://cdn.prod.website-files.com/60f1486c9971edb7304fc4f5/64242ffe45150cc6e2fcadac_Tags.svg"
        width={100}
        height={100}
        className="mb-4"
      ></Image>
      <p
        style={{ fontWeight: "3000",fontSize:"5rem",lineHeight:"3.6rem" }}
        className=" w-[55%] lg:w-[30%] lg:tracking-wide lg:leading-none tracking-tighter leading-[60px]"
      >
        GIFT A YEAR OF SIDE+
      </p>
      <p className="w-[55%]  lg:w-[40%] tracking-tighter text-neutral-400 text-md">
        Give the perfect digital gift to the person you love the most. A whole year of side+
      </p>
      <p className="w-[55%] lg:w-[30%] tracking-tighter text-neutral-400 text-lg">(No wrapping required)</p>
      <button className="px-8 py-3 mt-2 text-lg font-bold rounded-lg button">Get Deal</button>
    </motion.div>
  );
};

export default Fourth;
