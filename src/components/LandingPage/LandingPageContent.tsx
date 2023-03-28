import { motion } from "framer-motion";

const LandingPageContent = (props: { children: React.ReactNode }) => {
  const opacityVariants = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 5,
        duration: 1,
      },
    },

    hidden: {
      opacity: 0,
      translateY: 80,
    },
  };

  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center"
      variants={opacityVariants}
      animate="visible"
      initial="hidden"
    >
      {props.children}
    </motion.div>
  );
};

export default LandingPageContent;
