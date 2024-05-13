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
    <div className="w-screen h-screen flex flex-col">
      <Navbar className={topClassname} />
      <div className="flex-1">{children}</div>
      <BottomTabs className={bottomClassname} />
    </div>
  );
};

export default TopBottomLayout;
