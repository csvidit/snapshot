import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const WeatherImage = () => {
  return (
    <Tilt>
      <Image
        width={250}
        height={250}
        src="/pic1.jpg"
        alt="Picture of ice"
        className="rounded-xl"
      ></Image>
    </Tilt>
  );
};

export default WeatherImage;
