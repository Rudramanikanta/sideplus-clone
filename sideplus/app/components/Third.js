import React from "react";
import { motion } from "framer-motion";
import Prize from "../home/third.svg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
export const Third = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animation = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className="flex flex-col items-center content-center justify-center p-10 gap-y-6 rounded-lg h-[230px] hover:shadow-md hover:border-neutral-500 hover:ring-1 hover:ring-neutral-500 w-fit group hover:bg-neutral-400/10"
      animate={inView ? "visible" : "hidden"}
      variants={animation}
    >
      <Image
        src={Prize}
        className="w-[200px] h-[200px] group-hover:h-[140px] group-hover:w-[140px]  transform transition-all duration-100 ease-in  group-hover:-translate-y-2"
      ></Image>
      <p className="text-sm relative font-thin w-[300px] group-hover:opacity-100 translate-y-1/4 group-hover:translate-y-0 duration-300 transform text-center opacity-0  text-neutral-500 tracking-wide leading-5 align-center">
        Monthly Loyalty rewards for members like next-gen console, iphones ,
        clothing and Sidemen memorabilla
      </p>
    </motion.div>
  );
};
