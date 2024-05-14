"use client";

import useDrawer from "@/hooks/useDrawer";
import { Plus } from "lucide-react";

const AddLocationButton = () => {
  const { setDrawer } = useDrawer();
  return (
    <button onClick={() => setDrawer("addlocation")} className="p-2">
      <Plus />
    </button>
  );
};

export default AddLocationButton;
