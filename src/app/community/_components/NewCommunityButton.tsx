"use client";

import useDrawer from "@/hooks/useDrawer";
import { Pencil } from "lucide-react";

const NewCommunityButton = () => {
  const { setDrawer } = useDrawer();
  return (
    <button
      onClick={() => setDrawer("newcommunitypost")}
      className="fixed p-2.5 rounded-[9px] bg-black text-white z-10 top-[77vh] right-[5%]"
    >
      <Pencil />
    </button>
  );
};

export default NewCommunityButton;
