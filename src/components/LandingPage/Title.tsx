import React from "react";
import Tilt from "react-parallax-tilt";

const Title = (props: {
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
  return (
    <React.Fragment>
      <Tilt
        tiltReverse={true}
        className="parallax-effect self-center"
        perspective={7500}
      >
        <h1 className="text-amber-600 font-semibold text-6xl self-center">
          {props.children}
        </h1>
      </Tilt>
    </React.Fragment>
  );
};

export default Title;
