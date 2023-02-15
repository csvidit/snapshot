import React from "react";
import GaugeChart from "react-gauge-chart";
import styles from "./AQI.module.css"
import { MdOutlineAir } from "react-icons/md"

const AQI = (props: { aqi: number}) => {
  
  const pointerLeft = props.aqi*(51.2);

  return (
    <div className="flex flex-col h-max space-y-1 hover:bg-slate-800 p-4 rounded-xl w-64 font-medium justify-between col-span-1">
      <div className="flex flex-row space-x-1">
        <MdOutlineAir size="2em"></MdOutlineAir>
      <p className="text-blue-500 text-2xl">AQI</p>
      
      </div>
      
      <div className="flex flex-col space-y-1">
        <p className="text-violet-700 text-8xl">{props.aqi}</p>
        <p className="text-violet-700">REALLY BAD</p>
        <div className="relative flex flex-row space-x-0 w-full items-start">
        {/* <div id="" className={"h-1 w-full self-center "+styles.aqi_slider}></div>
          <div className={"absolute z-10 h-3 w-1 bg-white self-center left-["+pointerLeft.toString()+"px]"}></div>
        </div> */}
        <div className="flex flex-row justify-between text-xs">
          <p className="text-blue-500 self-center">0</p>
          <p className="text-blue-500 self-center">300</p>
        </div>
        <p className="text-slate-300 text-xs font-light">
          Use breathing protection if possible.
        </p>
      </div>
    </div>
  );
};

export default AQI;
