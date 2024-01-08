"use client";

import Link from "next/link";
import React from "react";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const pathname = usePathname();

  const handleExitClick = () => {
    router.push("/");
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          alt="logo"
          width="122"
          height="25"
          className="py-8 mb-11 mx-auto"
          src="/icons/logo.svg"
        />
        <ul className="space-y-7">
          <SidebarItem
            current={pathname === "/dashboard"}
            pathname="/dashboard"
            alt="dashboard icon"
            src="/icons/squares.svg"
          >
            Dashboard
          </SidebarItem>

          <SidebarItem
            current={pathname === "/companies"}
            pathname="/companies"
            alt="companies icon"
            src="/icons/briefcase.svg"
          >
            Comapanies
          </SidebarItem>
        </ul>
        <button
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
          onClick={handleExitClick}
        >
          <Image
            alt="exit icon"
            width="18"
            height="18"
            src="/icons/arrow-left-on-rectangle.svg"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
