import { MdOutlineAir } from "react-icons/md";

const AQITitle = () => {
  return (
    <div className="flex flex-row space-x-1 items-center clear-left text-blue-500 text-2xl">
      <MdOutlineAir size="1.5em"></MdOutlineAir>
      <p className="font-light">AQI</p>
    </div>
  );
};

export default AQITitle;
