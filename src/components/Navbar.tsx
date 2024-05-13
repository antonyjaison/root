import { cn } from "@/lib/utils";
import { Menu, Settings } from "lucide-react";
import React from "react";

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn("p-7 flex justify-between items-center", className)}>
      <button className="p-2">
        <Menu />
      </button>
      <h3 className="text-2xl">Kozhikode</h3>
      <button className="p-2">
        <Settings />
      </button>
    </div>
  );
};

export default Navbar;
