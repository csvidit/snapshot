import React from "react";
import styles from "./LandingPage/LandingPage.module.css";
import { BeatLoader } from "react-spinners";

const Loading = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const mainContainerStyles =
    "w-screen h-screen flex flex-col space-y-6 justify-center"

  const mainContentStyles =
    "w-full h-full flex flex-col space-y-1 bg-stone-200 dark:bg-stone-900 justify-center";

  return (
    <div className={mainContainerStyles}>
      <div className={mainContentStyles}>
      <BeatLoader className="self-center" color="#d97706" />
        <p className="text-amber-600 text-4xl self-center font-bold">
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default Loading;
