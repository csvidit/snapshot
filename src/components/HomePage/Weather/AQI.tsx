import React from "react";
import GaugeChart from "react-gauge-chart";
import styles from "./AQI.module.css";
import AQITitle from "./AQITitle";

const AQI = (props: { aqi: number }) => {
  const pointerLeft = props.aqi * 51.2;

  let aqiLabel = "";
  switch (props.aqi) {
    case 1:
      aqiLabel = "Good";
      break;
    case 2:
      aqiLabel = "Fair";
      break;
    case 3:
      aqiLabel = "Moderate";
      break;
    case 4:
      aqiLabel = "Poor";
      break;
    case 5:
      aqiLabel = "Very Poor";
      break;
    default:
      aqiLabel = "Invalid Value";
  }

  const aqi = props.aqi

  const aqiColor = (aqi: number) => {
    if (aqi == 1) {
      return "text-teal-500";
    } else if (aqi == 2) {
      return "text-yellow-500";
    } else if (aqi == 3) {
      return "text-amber-500";
    } else if (aqi == 4) {
      return "text-orange-500";
    } else {
      return "text-red-500";
    }
  };

  const nowAqiColor = aqiColor(props.aqi)

  return (
    <div className="flex flex-col h-max space-y-1 rounded-xl w-64 font-medium justify-between col-span-1">
      <AQITitle />
      <div className={"flex flex-col space-y-1 "+nowAqiColor}>
        <p className="text-8xl">{props.aqi}</p>
        <p className="">{aqiLabel}</p>
        <div className="relative flex flex-row space-x-0 w-full items-start">
          {/* <div id="" className={"h-1 w-full self-center "+styles.aqi_slider}></div>
          <div className={"absolute z-10 h-3 w-1 bg-white self-center left-["+pointerLeft.toString()+"px]"}></div> */}
        </div>
        {/* <div className="flex flex-row justify-between text-xs">
          <p className="text-blue-500 self-center">0</p>
          <p className="text-blue-500 self-center">300</p>
        </div> */}
        {/* <p className="text-slate-300 text-xs font-light">
          Use breathing protection if possible.
        </p> */}
      </div>
    </div>
  );
};

export default AQI;
