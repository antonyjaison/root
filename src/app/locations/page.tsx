import { db } from "@/lib/db";
import { locationTable } from "@/lib/schema/location";
import LocationCard from "./_components/LocationCard";

const LocationsPage = async () => {
  const locations = await db.select().from(locationTable).limit(10);

  return (
    <div className="h-full overflow-auto">
      {locations.length === 0 && (
        <p className="text-center text-red-800 mt-4 text-2xl">
          No locations found
        </p>
      )}
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
};



export default LocationsPage;
