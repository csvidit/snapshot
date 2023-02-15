import React, { useState, useEffect } from "react";
import { TbTemperature } from "react-icons/tb";
import { Sparklines, SparklinesLine } from "react-sparklines";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const TemperatureDetails = (props: {
  temp: number;
  minTemp: number;
  maxTemp: number;
  windSpeed: number;
}) => {
  const tempColor = (temp: number) => {
    if (temp < 0) {
      return "text-white";
    } else if (temp > 0 && temp < 10) {
      return "text-cyan-500";
    } else if (temp > 10 && temp < 15) {
      return "text-teal-500";
    } else if (temp > 15 && temp < 20) {
      return "text-yellow-500";
    } else if (temp > 20 && temp < 25) {
      return "text-amber-500";
    } else if (temp > 25 && temp < 30) {
      return "text-orange-500";
    } else {
      return "text-red-500";
    }
  };

  const nowTextColor = tempColor(props.temp),
    minTextColor = tempColor(props.minTemp),
    maxTextColor = tempColor(props.maxTemp);

  return (
    <div className="flex flex-col space-y-1 hover:bg-slate-800 p-4 rounded-xl w-64 font-light h-max col-span-1">
      <div className="flex flex-row space-x-1 items-center">
        <TbTemperature size="2em"></TbTemperature>
        <p className="text-blue-500 text-2xl">Temperature</p>
      </div>

      <div className="flex flex-row space-x-1 justify-between items-center">
        <div className="flex flex-col space-y-1">
          <p className="text-blue-500 text-md font-bold">NOW</p>
          <div className="flex flex-row space-x-1">
            <p className={"text-8xl self-center font-semibold " + nowTextColor}>
              {Math.trunc(props.temp)}
            </p>
            <p className={"text-4xl self-start " + nowTextColor}>&deg;C</p>
          </div>
        </div>
        <div className="flex flex-col space-y-1 self-start">
          <p className="text-slate-500 text-md self-end">LATER</p>
          <div className="flex flex-row space-x-1">
            <p className="text-yellow-500 text-4xl self-center">-</p>
            <p className="text-yellow-500 text-2xl self-start">&deg;C</p>
          </div>
          <p className="text-slate-500 text-md self-end">WIND</p>
          <div className="flex flex-row space-x-1 space-y-1">
            <p className="text-white text-4xl self-center">{Math.trunc(props.windSpeed)}</p>
            <p className="text-white text-2xl self-start">ms<sup>-1</sup></p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-0 w-full items-start text-slate-300 text-xs">
        <p>It will be windy, so take a light jacket.</p>
      </div>
      <div className="flex flex-row space-x-0 w-full items-start"></div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-blue-500 text-xs">MIN</p>
          <div className={"flex flex-row space-x-1 text-md "+minTextColor}>
            <p className="self-center">
              {Math.trunc(props.minTemp)}
            </p>
            <p className="self-center">&deg;C</p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-blue-500 text-xs self-end">MAX</p>
          <div className={"flex flex-row space-x-1 text-md "+maxTextColor}>
            <p className="self-center">
              {Math.trunc(props.maxTemp)}
            </p>
            <p className="self-center">&deg;C</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-1 w-full items-center text-slate-300 text-xs">
        <p>Min and Max are for current variations in temperature across the city only.</p>
      </div>
    </div>
  );
};

export default TemperatureDetails;
