import React from "react";
import Navbar from "./Navbar";

type TopOnlyLayoutProps = {
  children: React.ReactNode;
  topClassname?: string;
};

const TopOnlyLayout = ({ children, topClassname }: TopOnlyLayoutProps) => {
  return (
    <div className="flex w-screen h-[100dvh] flex-col">
      <Navbar className={topClassname} />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default TopOnlyLayout;
