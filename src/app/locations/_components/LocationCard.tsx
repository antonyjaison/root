"use client";

import { useLocation } from "@/hooks/useLocation";
import { locationTable } from "@/lib/schema/location";

type Location = typeof locationTable.$inferSelect;

type LocationCardProps = {
  location: Location;
};

function LocationCard({ location }: LocationCardProps) {
  const { setLocation } = useLocation();
  return (
    <button
      onClick={() =>
        setLocation({
          name: location.title,
          lat: parseFloat(location.latitude),
          lng: parseFloat(location.longitude),
        })
      }
      className="px-8 w-full block active:bg-gray-200"
    >
      <div className="text-left py-5  border-b border-[#B1B1B1]">
        <h3 className="text-2xl">{location.title}</h3>
        <p className="font-sm">{`${location.latitude}, ${location.longitude}`}</p>
      </div>
    </button>
  );
}

export default LocationCard;
