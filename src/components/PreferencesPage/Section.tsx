import React from "react";

const Section = (props: { id: string; title: string; children: any }) => {
  return (
    <div id={props.id} className="w-full flex flex-col">
      <h2 className="text-amber-600 text-2xl lg:text-4xl">{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Section;
