type Location = {
  name: string;
  lat: number;
  lng: number;
};

const locations = [
  {
    name: "Location 1",
    lat: 11.2588,
    lng: 75.7804,
  },
  {
    name: "Location 2",
    lat: 11.2588,
    lng: 75.7804,
  },
  {
    name: "Location 3",
    lat: 11.2588,
    lng: 75.7804,
  },
  {
    name: "Location 4",
    lat: 11.2588,
    lng: 75.7804,
  },
  {
    name: "Location 5",
    lat: 11.2588,
    lng: 75.7804,
  },
];

const LocationsPage = () => {
  return (
    <div className="h-full overflow-auto">
      {locations.map((location) => (
        <LocationCard key={location.name} location={location} />
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
        <h3 className="text-2xl">{location.name}</h3>
        <p className="font-sm">{`${location.lat}, ${location.lng}`}</p>
      </div>
    </button>
  );
}

export default LocationsPage;
