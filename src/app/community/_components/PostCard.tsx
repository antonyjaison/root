"use client";

import { deletePost } from "@/actions/post.action";
import { useLocation } from "@/hooks/useLocation";
import { postTable } from "@/lib/schema/post";
import { calculateDistance } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { Ellipsis, Trash } from "lucide-react";

type Post = typeof postTable.$inferSelect;

function PostCard({ post }: { post: Post }) {
  const { location } = useLocation();
  const mutation = useMutation({
    mutationFn: () => {
      return deletePost(post.id);
    },
    onSuccess: () => {
      // Do something
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });
  return (
    <div className="py-[14px] px-5 bg-white border-t-[5px] border-[#111]">
      <div className="flex justify-between items-center">
        <div className="flex gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-8 h-8 object-cover"
            src="/images/placeholder-avatar.svg"
            alt="placeholder avatar"
          />
          <div>
            <h3>Ethan Hunt</h3>
            <p className="text-[9px] text-[#8E8E8E]">
              Just now ·{" "}
              {calculateDistance(
                {
                  lat: location?.lat ?? 0,
                  lng: location?.lng ?? 0,
                },
                {
                  lat: parseFloat(post.latitude),
                  lng: parseFloat(post.longitude),
                }
              ).toFixed(2)}{" "}
              Kms
            </p>
          </div>
        </div>
        <button onClick={() => mutation.mutate()}>
          <Trash />
        </button>
      </div>
      <div>
        <p className="text-[10px] my-2">{post.body}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-[140px] w-full object-cover"
          src={post.imageUrl}
          alt=""
        />
      </div>
    </div>
  );
}

export default PostCard;
