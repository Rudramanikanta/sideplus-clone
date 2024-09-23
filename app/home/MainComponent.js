"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import "../globals.css";
import { useRouter } from "next/navigation";
import sideplus from "../components/sideplus.svg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Second from "../components/Second";
import image from "./image.png";
import BTS from "./BTS.svg";
import Prize from "./third.svg";
import { Third } from "../components/Third";
import Fourth from "../components/Fourth";
import Membership from "../components/Membership";
import Information from "../components/Information";
import Bottom from "../components/Bottom";
const MainComponent = () => {
  const router = useRouter();
  const session = useSession();
  const big = useRef(null);
  const { scrollYProgress } = useScroll({
    target: big,
    offset: ["start end", "end start"],
  });
  const info = [
    {
      title: "who are the Sidemen?",
      para: `We are a group of friends who love creating content and pushing the boundaries of digital entertainment. We met playing video games and become best amtes.After a few years we realized the potential 
        of having a group that represented what we stood for, loved doing and were constantly creating - and so The Sidemen were born. Today we entertain millions every week (at least we hope they are entertained) 
        and created content for everyone who wants to follow our journey
        `,
    },
    {
      title: "How much does Side+ cost?",
      para: "Side+ costs almost 7 pounds ($69.99 annually). it's 1 pound per Sidemen. Harry is the one who's considered the 99p member. Jokes aside, we have bulit out a club for hardcore fans where they can connect with us on a deeper level. We know that this is a paywall but the money goes straight back into this project. We want the members of this club to feel like they are getting their moneys worth - through content, giveways and opportunities to interact and meet us.",
    },
    {
      title: "Are rewards transferable?",
      para: "Yes, loyalty rewards can be transferred from one member to another. In the case of a member transferring his/her in-life reward to person below the age of 18 a legal guardian will need to accompany them to the event. In the case of the $100,000 Club the member needs to be 18 years of age to enter and any transfers need to be made to a person above the age of 18 as well.",
    },
    {
      title: "How do I cancel?",
      para: "it's super easy to cancel your subscription. In order to cancel your subscription, simply navigate to 'Manage Subscrpption'' and click on ''cancel subscriptio''.A pop-up window will appear where you can either cancel or continue. Click continue and your subscription will be cancelled.",
    },
  ];
  const images = [
    {
      button: "GAME SHOWS",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/6659ac5b8c9fa4ed8d90e4fe_Game-Covers-Banner-.webp",
    },
    {
      button: "THE SIDECAST",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/645a242382a2fe03e3463e37_SIDECAST-POSTER.webp",
    },
    {
      button: "GUESTCAST",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/645a2439b999bb95fc2e51e0_GUESTCAST-POSTER.webp",
    },
    {
      button: "SIDE+ SATURDAYS",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/66757e4102128f46509a7c73_65dc98e1670dd62f61a78684_Side%2B-Saturdays-Banner1.jpg",
    },
  ];
  const images2 = [
    {
      button: "ROAST BTS",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/645a283a0c7f639156aa4ebe_Roast_of_the%20_sidemen.webp",
    },
    {
      button: "$100 vs $10,000 BTS",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/645a2869b1013f67e4921724_Sidemen%20100_v10000.webp",
    },
    {
      button: "JAPAN BTS",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/645a2439b999bb95fc2e51e0_GUESTCAST-POSTER.webp",
    },
    {
      button: "WEIRD HOTELS BTS",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/645a284497a7dca94d0dffc6_sidemen_weird_hotels.webp",
    },
  ];
  const images3 = [
    {
      button: "IPHONE",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/654bcb0ec547cbd6354717b2_IMG_4144.JPG",
    },
    {
      button: "PLAYSTATION 5",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/66757abb6fd2437aa980e80c_64626e49fe447883cc20d054_PS5%20standard.webp",
    },
    {
      button: "NINTENDO SWITCH",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/66757b5e2a203b464e6e67e3_nintendo%20switch%20side%2B.jpeg",
    },
    {
      button: "OSMO POCKET VLOG",
      img: "https://cdn.prod.website-files.com/610c5f70ab032078a5ff059f/66954b425890d3c3627fe776_DJI-Osmo-Thumnail.png",
    },
  ];
  const ref = useRef(null);
  const mar = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const padding = useTransform(
    mar?.scrollYProgress,
    [0, 1],
    ["100px", "-80px"]
  );
  const three = [
    {
      image: "/first.png",
      para: "Exclusive access to all the new shows, and series. Behind the scenes, Unfiltered and only avaliable to Side+ subscribers",
    },
    {
      image: "/second.png",
      para: "The Sidecast is our exclusive podcast where we chat about everything without any judgement. New episode every week",
    },
    {
      image: "/third.png",
      para: "We want to talk about what you guys are wondering. Every week we pick questions sent in from you and answer them on the Sidecast",
    },
    {
      image: "/four.png",
      para: "Join our competitions to be picked for our fan dinners in London, monthly zoom calls and the 100K club!",
    },
    {
      image: "/five.png",
      para: "Monthly loyalty rewards for members like next-gen consoles, Iphones, clothing and Sidemen memorabilia",
    },
    {
      image: "/image.png",
      para: "Be part of the club that we always scour first when picking people for our content. keep an eye out for upcoming shoots",
    },
  ];
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  return (
    <div className="bg-[#171717]">
      <div className="bg-[url('https://cdn.prod.website-files.com/60f1486c9971edb7304fc4f5/63d3c74f2c8dce26ba36947e_1673614238746.webp')] h-screen bg-center">
        <div className="flex items-center content-center justify-between p-6 text-center align-center">
          <div>
            <Image src={sideplus} width={100} alt="sam" height={100}></Image>
          </div>
          <div className="flex items-center content-center text-center justify-evenly align-center gap-x-2">
            <FaInstagram size={30}></FaInstagram>
            <FaXTwitter size={30}></FaXTwitter>
            <button
              className="p-2 border-black-100"
              onClick={() => {
                if (session.data == null || session.data == undefined) {
                  signIn();
                } else {
                  signOut();
                }
              }}
            >
              {session.data == null || session.data == undefined
                ? "signIn"
                : "signOut"}
            </button>
          </div>
        </div>
        <div ref={big} className="flex justify-center mt-64 text-center">
          <div className="gap-y-10">
            <motion.p style={{ scale }} className="font-medium">
              Welcome to SIDE+
            </motion.p>
            <motion.p
              style={{ scale }}
              className="mt-6 text-5xl font-semibold tracking-wider"
            >
              WATCH EVERTHING HERE!
            </motion.p>
            <motion.button
              style={{ scale }}
              className="p-2 px-8 mt-4 text-xl font-semibold rounded-md button"
            >
              Watch now
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div ref={ref} style={{ marginTop: padding }}>
        <Second
          images={images}
          prev={true}
          buttonText="Join to Watch"
          image={image}
          side="Exclisive series just for side+ members"
        ></Second>
        <Second
          images={images2}
          prev={false}
          buttonText="See all"
          image={BTS}
          side="Uncut and uncensored footage"
        ></Second>
        <Second
          images={images3}
          prev={false}
          buttonText="See all loyalty rewards"
          image={Prize}
          side="We like to give back to you guys"
        ></Second>
      </motion.div>
      <div className="grid items-center content-center justify-center grid-cols-1 p-10 align-middle lg:grid-cols-3 gap-x-6">
        {three.map((val) => {
          return <Third key={val} image={val.image} para={val.para}></Third>;
        })}
      </div>

      <div className="p-14">
        <Fourth></Fourth>
      </div>
      <div className="p-12">
        <Membership></Membership>
      </div>
      <div className="p-10 gap-y-6">
        {info.map((val, index) => {
          return (
            <Information
              key={index}
              title={val.title}
              info={val.para}
            ></Information>
          );
        })}
      </div>
      <div>
        <Bottom></Bottom>
      </div>
    </div>
  );
};

export default MainComponent;
