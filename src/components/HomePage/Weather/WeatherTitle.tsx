import { TiWeatherCloudy } from "react-icons/ti";

const WeatherTitle = () => {
  return (
    <div className="flex flex-row space-x-1 items-center clear-left text-blue-500 text-2xl">
      <TiWeatherCloudy size="1.5em"></TiWeatherCloudy>
      <p className="text-blue-500 text-2xl">Weather</p>
    </div>
  );
};

export default WeatherTitle;