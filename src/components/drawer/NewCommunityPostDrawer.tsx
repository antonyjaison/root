import React from "react";
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { UploadButton } from "@/utils/uploadthing";
import { Textarea } from "@/components/ui/textarea"

const NewCommunityPostDrawer = () => {
  return (
    <div className="min-h-[40vh] px-8 pt-2">
      <DrawerHeader>
        <DrawerTitle className="text-left font-normal text-2xl">
          Create a new post
        </DrawerTitle>
      </DrawerHeader>
      <div>
        <Textarea />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </div>
  );
};

export default NewCommunityPostDrawer;
