import { Menu, Plus } from "lucide-react";

const LocationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen w-full bg-[#F0F0F0]">
      <LocationsNavbar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

const LocationsNavbar = () => {
  return (
    <div className="p-7 flex justify-between items-center">
      <button className="p-2">
        <Menu />
      </button>
      <h3 className="text-2xl">Kozhikode</h3>
      <button className="p-2">
        <Plus />
      </button>
    </div>
  );
};

export default LocationsLayout;
