import React from "react";
import Navbar from "./Navbar";
import BottomTabs from "./BottomTabs";

type TopBottomLayoutProps = {
  topClassname?: string;
  bottomClassname?: string;
  children: React.ReactNode;
};

const TopBottomLayout = ({
  children,
  bottomClassname,
  topClassname,
}: TopBottomLayoutProps) => {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar className={topClassname} />
      <div className="flex-1 overflow-y-auto">{children}</div>
      <BottomTabs className={bottomClassname} />
    </div>
  );
};

export default TopBottomLayout;
