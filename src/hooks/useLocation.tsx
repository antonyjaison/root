import { create } from "zustand";
import { persist } from "zustand/middleware";

type LocationState = {
  location: null | {
    lat: number;
    lng: number;
    name: string;
  };
  setLocation: (location: { lat: number; lng: number; name: string }) => void;
};

export const useLocation = create(
  persist<LocationState>(
    (set) => ({
      location: null,
      setLocation: (location) => set({ location }),
    }),
    {
      name: "location",
    }
  )
);
