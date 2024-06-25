import { motion } from "framer-motion";
import { HiPencil } from "react-icons/hi2";

const secondaryVariants = {
  initial: { display: "none" },
  hover: { display: "flex" },
};
const EditWeatherButton = (props: {openModal: any}) => {
  return (
    <motion.button
      variants={secondaryVariants}
      className="flex flex-row items-center p-1 rounded-md bg-blue-900 text-blue-300"
      onClick={() => props.openModal()}
    >
      <HiPencil />
    </motion.button>
  );
};

export default EditWeatherButton;
