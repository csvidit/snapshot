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

const TemperatureDetails = (props: {currTemp: number, minTemp: number, maxTemp: number}) => {
  const data = [{ name: "min", temp: "9" }];

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
            <p className="text-cyan-500 text-8xl self-center font-semibold">
              {props.currTemp}
            </p>
            <p className="text-cyan-500 text-4xl self-start">&deg;C</p>
          </div>
        </div>
        <div className="flex flex-col space-y-1 self-start">
          <p className="text-slate-500 text-md self-end">LATER</p>
          <div className="flex flex-row space-x-1">
            <p className="text-yellow-500 text-4xl self-center">-</p>
            <p className="text-yellow-500 text-2xl self-start">&deg;C</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-0 w-full items-start text-slate-300 text-xs">
        <p>It will be windy, so take a light jacket.</p>
      </div>
      <div className="flex flex-row space-x-0 w-full items-start">
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-blue-500 text-xs">MIN</p>
          <div className="flex flex-row space-x-1 text-md">
            <p className="text-blue-500 self-center">{props.minTemp}</p>
            <p className="text-blue-500 self-center">&deg;C</p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-blue-500 text-xs self-end">MAX</p>
          <div className="flex flex-row space-x-1 text-md">
            <p className="text-blue-500 self-center">{props.minTemp}</p>
            <p className="text-blue-500 self-center">&deg;C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureDetails;
