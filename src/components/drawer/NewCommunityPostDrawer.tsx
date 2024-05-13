import React from "react";
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";

const NewCommunityPostDrawer = () => {
  return (
    <div className="min-h-[40vh] px-8 pt-2">
      <DrawerHeader>
        <DrawerTitle className="text-left font-normal text-2xl">
          Create a new post
        </DrawerTitle>
      </DrawerHeader>
      <DrawerContent></DrawerContent>
    </div>
  );
};

export default NewCommunityPostDrawer;
