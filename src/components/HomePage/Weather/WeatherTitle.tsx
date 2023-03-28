import { BsCloud } from "react-icons/bs";

const WeatherTitle = (props: {city: string}) => {
  return (
    <div className="flex flex-row space-x-1 items-center clear-left text-blue-500 text-2xl">
      <BsCloud size="1.5em"></BsCloud>
      <p className="text-blue-500 text-2xl">{props.city}</p>
    </div>
  );
};

export default WeatherTitle;