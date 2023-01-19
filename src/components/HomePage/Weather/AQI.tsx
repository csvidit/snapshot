import React from "react";
import GaugeChart from "react-gauge-chart";

const AQI = () => {
  return (
    <div className="flex flex-col space-y-1 hover:bg-slate-800 p-4 rounded-xl w-64 font-medium justify-between">
      <p className="text-blue-500 text-2xl">AQI</p>
      <div className="flex flex-col space-y-1">
        <p className="text-violet-700 text-6xl">251</p>
        <p className="text-violet-700">REALLY BAD</p>
        <div className="relative flex flex-row space-x-0 w-full items-start">
        <div className=" bg-green-500 h-1 w-[42.67px] self-center"></div>
        <div className=" bg-yellow-500 h-1 w-[42.67px] self-center"></div>
        <div className=" bg-orange-500 h-1 w-[42.67px] self-center"></div>
        <div className=" bg-red-500 h-1 w-[42.67px] self-center"></div>
        <div className=" bg-purple-500 h-1 w-[42.67px] self-center"></div>
        <div className=" bg-rose-700 h-1 w-[42.67px] self-center"></div>
        <div className="absolute z-10 h-3 w-1 left-8 bg-white self-center"></div>
      </div>
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
