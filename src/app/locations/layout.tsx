import LocationsNavbar from "./_components/LocationsNavbar";

const LocationsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen w-full bg-[#F0F0F0]">
      <LocationsNavbar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default LocationsLayout;
