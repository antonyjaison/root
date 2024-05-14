"use client";

import { ArrowLeft } from "lucide-react";
import AddLocationButton from "./AddLocationButton";
import Link from "next/link";
import { useLocation } from "@/hooks/useLocation";

const LocationsNavbar = () => {
  const { location } = useLocation();
  return (
    <div className="p-7 flex justify-between items-center">
      <Link href="/home" className="p-2">
        <ArrowLeft />
      </Link>
      <h3 className="text-2xl">{location?.name ?? "Select a location"}</h3>
      <AddLocationButton />
    </div>
  );
};

export default LocationsNavbar;
