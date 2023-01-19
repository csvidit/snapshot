import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { UrlObject } from "url";
import { motion } from "framer-motion";

const Button = (props: {
  underline: string;
  href: string | UrlObject;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  const linkUnderlineVariants = {
    animate: {
      width: 80,
    },
    hover: {
      width: 112,
      borderTopColor: "#0ea5e9",
      transition: {
        duration: 0.25,
        type: "spring",
      },
    },
  };
  const linkLabelVariants = {
    animate: {
      width: 80,
      color: "#64748b",
    },
    hover: {
      color: "#0ea5e9",
      transition: {
        duration: 0,
        type: "tween",
      },
    },
  };

  if(props.underline === "true")
  {
    return (
      <motion.div animate="animate" whileHover="hover">
        <motion.div
          className="text-xl text-slate-500 flex flex-col justify-center items-center w-20 hover:w-28 hover:ease-in transition"
          variants={linkLabelVariants}
        >
          <Link href={props.href}>
            <p>{props.children}</p>
          </Link>
          <motion.div
            className="w-20 border-t-2 border-slate-900 dark:border-slate-500"
            variants={linkUnderlineVariants}
          ></motion.div>
        </motion.div>
      </motion.div>
    );
  }
  else
  {
    return (
      <motion.div animate="animate" whileHover="hover">
        <motion.div
          className="text-xl text-slate-500 flex flex-col justify-center items-center w-20 hover:w-28 hover:ease-in transition"
          variants={linkLabelVariants}
        >
          <Link href={props.href}>
            <p>{props.children}</p>
          </Link>
        </motion.div>
      </motion.div>
    );
  }
  
};

export default Button;
