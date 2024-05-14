"use server";

import { db } from "@/lib/db";
import { locationTable } from "@/lib/schema/location";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const locationSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  title: z.string(),
});

export const createLocation = async (
  location: z.infer<typeof locationSchema>
) => {
  const parsedData = await locationSchema.safeParseAsync(location);
  if (!parsedData.success) {
    throw new Error("Invalid location data");
  }

  const newLocation = await db
    .insert(locationTable)
    .values({
      title: location.title,
      latitude: location.lat as unknown as string,
      longitude: location.lng as unknown as string,
    })
    .returning({
      id: locationTable.id,
    });

  revalidatePath("/locations");

  return newLocation[0];
};
