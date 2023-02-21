import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import {motion} from "framer-motion"
import Link from "next/link";
import { createApi } from 'unsplash-js';

const WeatherImage = () => {

  return (
    <div className="col-span-2 flex flex-col">
      <Image
        width={512}
        height={512}
        src="/pic1.jpg"
        alt="Picture of ice"
        className="rounded-xl"
      ></Image>
      
      <motion.div className="border-b border-slate-700 text-slate-700 text-xs w-[256px] pt-2 pb-2" whileHover={{color: "#64748b", transition: {duration: 0.25}}}>
      <Link href="https://unsplash.com" className="w-max h-max">&copy; 2022 Unsplash</Link>
      </motion.div>
    </div>
  );
};

export default WeatherImage;
