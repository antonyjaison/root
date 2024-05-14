import { db } from "@/lib/db";
import { locationTable } from "@/lib/schema/location";

type Location = typeof locationTable.$inferSelect;

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

type LocationCardProps = {
  location: Location;
};

function LocationCard({ location }: LocationCardProps) {
  return (
    <button className="px-8 w-full block active:bg-gray-200">
      <div className="text-left py-5  border-b border-[#B1B1B1]">
        <h3 className="text-2xl">{location.title}</h3>
        <p className="font-sm">{`${location.latitude}, ${location.longitude}`}</p>
      </div>
    </button>
  );
}

export default LocationsPage;
