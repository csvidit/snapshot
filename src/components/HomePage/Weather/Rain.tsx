import { BsCloudRain } from "react-icons/bs";

const Rain = (props: { rain: number }) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex flex-row space-x-1 items-center text-blue-500 text-md self-end">
        <BsCloudRain />
        <p className="">RAIN</p>
      </div>

      <div className="flex flex-row space-x-1 justify-end items-end">
        <p className="flex text-slate-100 text-4xl">
          {props.rain === null || props.rain === undefined
            ? "-"
            : Math.trunc(props.rain)}
        </p>
        <p className="flex text-slate-400 text-2xl">
          {props.rain != undefined && "mm"}
        </p>
      </div>
    </div>
  );
};

export default Rain;
