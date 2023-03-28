import {BsWind} from "react-icons/bs"

const Wind = (props: { windSpeed: number }) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex flex-row space-x-1 items-center text-blue-500 text-md self-end">
        <BsWind size="" />
        <p className="">WIND</p>
      </div>
      <div className="flex flex-row space-x-1 justify-end items-end">
        <p className="text-slate-100 text-4xl">{Math.trunc(props.windSpeed)}</p>
        <p className="text-slate-400 text-2xl">
          ms<sup>-1</sup>
        </p>
      </div>
    </div>
  );
};

export default Wind;
