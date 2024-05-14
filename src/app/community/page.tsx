import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import NewCommunityButton from "./_components/NewCommunityButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


type CommunityPageProps = {
  searchParams: {
    filter?: string;
  };
};

const CommunityPage = async ({ searchParams }: CommunityPageProps) => {
  if (!searchParams.filter) {
    redirect("/community?filter=all");
  }

  return (
    <div className="h-full flex flex-col">
      <Tabs filter={searchParams.filter} />
      <div className="flex-1 bg-[#F0F0F0] px-8 py-4 space-y-8 overflow-y-auto relative">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
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

function PostCard() {
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
            <p className="text-[9px] text-[#8E8E8E]">Just now · 0.2 Kms</p>
          </div>
        </div>


        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>



      </div>
      <div>
        <p className="text-[10px] my-2">Ethan posted a photo</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-[140px] w-full object-cover"
          src="/images/dummy.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

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
