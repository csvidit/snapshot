import { WiDust } from "react-icons/wi";

const AQITitle = () => {
  return (
    <div className="flex flex-row space-x-1 items-center clear-left text-blue-500 text-2xl">
      <WiDust size="1.5em"></WiDust>
      <p className="font-light">AQI</p>
    </div>
  );
};

export default AQITitle;
