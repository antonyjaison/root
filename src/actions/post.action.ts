"use server";

import { db } from "@/lib/db";
import { postTable } from "@/lib/schema/post";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const PostSchema = z.object({
  body: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  imageUrl: z.string(),
});

export const createPost = async (input: z.infer<typeof PostSchema>) => {
  const parsedData = await PostSchema.safeParseAsync(input);
  if (!parsedData.success) {
    throw new Error("Invalid data");
  }

  const data = parsedData.data;

  const postId = await db
    .insert(postTable)
    .values({
      imageUrl: data.imageUrl,
      latitude: data.latitude as unknown as string,
      longitude: data.longitude as unknown as string,
      body: data.body,
    })
    .returning({
      id: postTable.id,
    });

  revalidatePath("/community");

  return postId;
};

export const deletePost = async (postId: number) => {
  await db.delete(postTable).where(eq(postTable.id, postId));

  revalidatePath("/community");
  return {
    sucess: true,
  };
};
