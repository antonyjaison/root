import { create } from "zustand";

type DrawerName = "welcome" | "newcommunitypost" | "addlocation";

type DrawerState = {
  currentDrawer: DrawerName | null;
  setDrawer: (val: DrawerName | null) => void;
};

const useDrawer = create<DrawerState>((set) => ({
  currentDrawer: null,
  setDrawer: (val) => set({ currentDrawer: val }),
}));

export default useDrawer;
