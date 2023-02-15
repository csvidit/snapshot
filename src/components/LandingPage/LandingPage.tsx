import { motion } from "framer-motion";
import styles from "./LandingPage.module.css";
import IllustrationAlpha from "./IllustrationAlpha";
import MiniProfile from "./MiniProfile";
import MoreInfo from "./MoreInfo";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Image from "next/image";
import { landingPageContainerStyles, mainContentStyles } from "../MainStyles";

const LandingPage = () => {
  

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
    <div className={landingPageContainerStyles}>
      <motion.div
        className={mainContentStyles}
        // style={{ opacity: 0, translateY: 800, scrollBehavior: "smooth"}}
        // animate={{ opacity: 1, translateY: 0 }}
        // transition={{
        //   type: "spring",
        //   staggerChildren: 1.5,
        //   when: "beforeChildren",
        //   duration: 1,
        // }}
        variants={opacityVariants}
        animate="visible"
        initial="hidden"
        // variants={list}
        // initial="hidden"
        // animate="visible"
      >
        <motion.div
          className="self-center"
          variants={opacityVariants}
          animate="visible"
          initial="hidden"
        >
          <IllustrationAlpha></IllustrationAlpha>
        </motion.div>
        <motion.div
          className="self-center"
          variants={opacityVariants}
          animate="visible"
          initial="hidden"
        >
          {/* <Title>snapshot</Title> */}
          <Image width={256} height={256} className="self-center" src="./snapshot.svg" alt="Illustration of person sitting and reading a newspaper"></Image>
        </motion.div>
        <motion.div
          className="self-center"
          variants={opacityVariants}
          animate="visible"
          initial="hidden"
        >
          <Subtitle>your daily briefing</Subtitle>
        </motion.div>
        <motion.div className="self-center mt-10">
        </motion.div>
        {/* <motion.div className="self-center mt-10">
            <Button href="/api/auth/login">Login</Button>
          </motion.div> */}
        {/* <motion.div className="self-center">
            <Button href="/api/auth/logout">Logout</Button>
          </motion.div> */}
        <motion.div className="self-center">
          <MiniProfile></MiniProfile>
        </motion.div>
        <MoreInfo link="true" href="https://github.com/csvidit/snapshot">
            <p>FROM THE WORLD OF VIDIT KHANDELWAL</p>
            <p>CURRENTLY IN <p className="inline text-red-400 text-xs">ALPHA</p> STAGE</p>
            <p>INVITE ONLY</p>
          </MoreInfo>
      </motion.div>
    </div>
  );
};

export default LandingPage;
