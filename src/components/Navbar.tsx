"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </HoveredLink>

        <HoveredLink href="/courses">
          <MenuItem setActive={setActive} active={active} item="Courses" />
        </HoveredLink>

        <HoveredLink href="/contacts">
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </HoveredLink>
      </Menu>
    </div>
  );
}

export default Navbar;
