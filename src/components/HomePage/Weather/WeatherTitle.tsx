import { BsCloud } from "react-icons/bs";
import EditWeatherDialog from "./EditWeatherDialog";
import { motion } from "framer-motion";

const primaryVariants = {
  initial: {},
  hover: {},
}

const WeatherTitle = (props: {city: string, setUnits: any}) => {
  return (
    <motion.div whileHover="hover" initial="initial" variants={primaryVariants} className="flex flex-row space-x-1 items-center clear-left text-blue-500">
      <BsCloud size="1.5em"></BsCloud>
      <p className="text-blue-500 text-2xl">{props.city}</p>
      <EditWeatherDialog setUnits={props.setUnits}/>
    </motion.div>
  );
};

export default WeatherTitle;