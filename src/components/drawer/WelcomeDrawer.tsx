import React from "react";
import { DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer";

const WelcomeDrawer = () => {
  return (
    <div className="min-h-[40vh]">
      <DrawerHeader>
        <DrawerTitle>Welcome to Create Next App</DrawerTitle>
      </DrawerHeader>
      <DrawerDescription>
        Get started by editing <code>pages/index.tsx</code>
      </DrawerDescription>
    </div>
  );
};

export default WelcomeDrawer;
