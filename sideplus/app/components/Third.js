import React from "react";
import { motion } from "framer-motion";
import Prize from "../home/third.svg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
export const Third = ({image,para}) => {
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
      className="flex flex-col items-center content-center justify-center p-10 gap-y-3 rounded-lg h-[230px] hover:shadow-md hover:border-neutral-500 hover:ring-1 hover:ring-neutral-500 w-fit group hover:bg-neutral-400/10"
      animate={inView ? "visible" : "hidden"}
      variants={animation}
    >
      <Image
        src={image}
        width={150}
        height={150}
        className="w-[220px] object-contain h-[220px] group-hover:h-[140px] group-hover:w-[140px]  transform transition-all duration-100 ease-in  group-hover:-translate-y-2"
      ></Image>
      <p className="text-sm relative font-thin w-[300px] group-hover:opacity-100 -mt-20 group-hover:mt-0 duration-200 transform text-center opacity-0  text-neutral-500 tracking-wide leading-5 align-center">
        {para}
      </p>
    </motion.div>
  );
};
