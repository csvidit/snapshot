import Link from "next/link";
import React from "react";
import SidePanelTab from "./SidePanelTab";

const SidePanel = () => {
  return (
    <div className="h-full w-full border-r-2 border-stone-500">
      <div className="flex flex-col">
        <SidePanelTab href="#weather">Weather</SidePanelTab>
        <SidePanelTab href="#news">News</SidePanelTab>
        <SidePanelTab href="#socials">Socials</SidePanelTab>
      </div>
    </div>
  );
};

export default SidePanel;
