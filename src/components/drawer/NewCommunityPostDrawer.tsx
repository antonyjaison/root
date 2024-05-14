"use client";
import { DrawerHeader, DrawerTitle } from "../ui/drawer";
import { UploadButton } from "@/utils/uploadthing";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/actions/post.action";
import useDrawer from "@/hooks/useDrawer";
import { useLocation } from "@/hooks/useLocation";

const NewCommunityPostDrawer = () => {
  const { setDrawer } = useDrawer();
  const { location } = useLocation();
  const [file, setFile] = useState<{
    name: string;
    url: string;
  } | null>(null);
  const [body, setBody] = useState("");

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return createPost(data);
    },
    onSuccess: () => {
      setDrawer(null);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });

  return (
    <div className="min-h-[40vh] px-8 pt-2">
      <DrawerHeader>
        <DrawerTitle className="text-left font-normal text-2xl">
          Create a new post
        </DrawerTitle>
      </DrawerHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate({
            body: body,
            latitude: location?.lat ?? "0",
            longitude: location?.lng ?? "0",
            imageUrl: file?.url,
          });
        }}
        className="space-y-4"
      >
        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter post content"
        />
        {!file ? (
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res: any) => {
              // Do something with the response
              console.log("Files: ", res);
              setFile({
                name: res[0].name,
                url: res[0].url,
              });
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        ) : (
          <div className="flex items-center justify-between">
            <p>{file.name}</p>
            <button onClick={() => setFile(null)} className="text-red-500">
              Remove
            </button>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default NewCommunityPostDrawer;
