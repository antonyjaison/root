"use client";

import { useLocation } from "@/hooks/useLocation";
import { cn } from "@/lib/utils";
import { Menu, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className }: NavbarProps) => {
  const { location } = useLocation();
  return (
    <div className={cn("p-7 flex justify-between items-center", className)}>
      <Link href="/locations" className="p-2">
        <Menu />
      </Link>
      <h3 className="text-2xl">{location?.name ?? "Select a location"}</h3>
      <button className="p-2">
        <Settings />
      </button>
    </div>
  );
};

export default Navbar;
