import { motion } from "framer-motion";
import { HiOutlineBolt, HiPencil } from "react-icons/hi2";
import EditNewsButton from "./EditNewsButton";
import EditNewsDialog from "./EditNewsDialog";

const NewsTitle = () => {

  const primaryVariants = {
    initial: {},
    hover: {},
  }

  return (
    <motion.div whileHover="hover" initial="initial" variants={primaryVariants} className="flex flex-row space-x-1 items-center text-rose-500 pl-2">
      <HiOutlineBolt size="1.5em"></HiOutlineBolt>
      <p className="text-2xl ">Top Stories</p>
      <EditNewsDialog/>
    </motion.div>
  );
};

export default NewsTitle;
