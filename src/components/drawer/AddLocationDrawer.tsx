"use client";

import { useRouter } from "next/navigation";
import { DrawerContent, DrawerHeader, DrawerTitle } from "../ui/drawer";
import {
  useJsApiLoader,
  GoogleMap,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createLocation } from "@/actions/location.action";
import useDrawer from "@/hooks/useDrawer";
import { Input } from "../ui/input";

const AddLocationDrawer = () => {
  const { setDrawer } = useDrawer();
  const [text, setText] = useState("Untitled");
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      return createLocation(data);
    },
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      setDrawer(null);
    },
  });
  const [selectedCenter, setSelectedCenter] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  return (
    <div className="px-2 pb-2 pt-2">
      <DrawerHeader>
        <DrawerTitle className="text-left font-normal text-2xl">
          Create a new post
        </DrawerTitle>
      </DrawerHeader>
      <div>
        <div className="w-full relative min-h-[75vh]">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ height: "75vh", width: "100%" }}
              center={selectedCenter ?? { lat: 11.2588, lng: 75.7804 }}
              zoom={10}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
              }}
              onClick={(e) => {
                const lat = e.latLng?.lat();
                const lng = e.latLng?.lng();
                if (lat && lng) {
                  setSelectedCenter({
                    lat,
                    lng,
                  });
                } else {
                  setSelectedCenter(null);
                }
              }}
            >
              <>
                {selectedCenter && (
                  <Marker
                    position={selectedCenter}
                    // icon={{
                    //   url: "/images/icons/goec.svg",
                    //   scaledSize: new window.google.maps.Size(35, 35), // Scale the icon size
                    //   anchor: new window.google.maps.Point(10, 10), // Anchor the icon
                    // }}
                  />
                )}
              </>
            </GoogleMap>
          ) : (
            <p>Loading...</p>
          )}
          {selectedCenter && (
            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2  w-[90%] space-y-2">
              <Input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="enter title"
              />
              <button
                onClick={() =>
                  mutation.mutate({
                    lat: selectedCenter.lat,
                    lng: selectedCenter.lng,
                    title: text,
                  })
                }
                disabled={mutation.isPending}
                className="bg-blue-500 text-white py-3 rounded-sm w-full"
              >
                Add location at {selectedCenter.lat.toFixed(2)},{" "}
                {selectedCenter.lng.toFixed(2)}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddLocationDrawer;
