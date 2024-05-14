import { ArrowLeft, Menu, Plus } from "lucide-react";
import AddLocationButton from "./components/AddLocationButton";
import Link from "next/link";

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
      <Link href="/home" className="p-2">
        <ArrowLeft />
      </Link>
      <h3 className="text-2xl">Kozhikode</h3>
      <AddLocationButton />
    </div>
  );
};

export default LocationsLayout;
