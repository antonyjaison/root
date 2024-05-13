"use client";
import { Home, MapPin, MessageSquareText, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type BottomTabsProps = {
  className?: string;
};

const links = [
  {
    title: "Home",
    href: "/home",
    Icon: Home,
  },
  {
    title: "Locality",
    href: "/locality",
    Icon: MapPin,
  },
  {
    title: "Community",
    href: "/community",
    Icon: Users,
  },
  {
    title: "Chat",
    href: "/chat",
    Icon: MessageSquareText,
  },
];

const BottomTabs = ({ className }: BottomTabsProps) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "w-full py-6 px-8 [box-shadow:0px_-3.945px_9.862px_0px_rgba(0,_0,_0,_0.10)]",
        className
      )}
    >
      <div className="flex justify-between">
        {links.map((link) => (
          <Link
            className={cn(
              "flex flex-col items-center gap-1.5 text-[#111111] p-1.5",
              pathname === link.href && "text-[#006D77]"
            )}
            key={link.href}
            href={link.href}
          >
            <link.Icon className="w-6 h-6" />
            <span>{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomTabs;
