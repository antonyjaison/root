import { calculateDistance, cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import NewCommunityButton from "./_components/NewCommunityButton";
import { db } from "@/lib/db";
import { postTable } from "@/lib/schema/post";
import PostCard from "./_components/PostCard";

type CommunityPageProps = {
  searchParams: {
    filter?: string;
  };
};

const CommunityPage = async ({ searchParams }: CommunityPageProps) => {
  if (!searchParams.filter) {
    redirect("/community?filter=all");
  }

  const posts = await db.select().from(postTable);

  return (
    <div className="h-full flex flex-col">
      <Tabs filter={searchParams.filter} />
      <div className="flex-1 bg-[#F0F0F0] px-8 py-4 space-y-8 overflow-y-auto relative">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {posts.length === 0 && (
          <div className="text-center text-gray-500">
            No posts found. Be the first to post!
          </div>
        )}
        <NewCommunityButton />
      </div>
    </div>
  );
};

const tabs = [
  {
    name: "All",
    tag: "all",
  },
  {
    name: "Latest",
    tag: "latest",
  },
  {
    name: "Nearby",
    tag: "nearby",
  },
  {
    name: "Raw materials",
    tag: "raw-materials",
  },
];

type TabsProps = {
  filter?: string;
};

const Tabs = async ({ filter }: TabsProps) => {
  return (
    <div className="flex flex-nowrap w-full overflow-y-auto justify-around flex-shrink-0">
      {tabs.map((tab) => (
        <Link
          href={`?filter=${tab.tag}`}
          key={tab.tag}
          className={cn(
            "text-gray-500 py-4 px-3 text-lg flex-shrink-0",
            filter === tab.tag && "text-gray-900"
          )}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default CommunityPage;
