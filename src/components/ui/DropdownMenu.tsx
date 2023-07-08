"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DropdownMenuProps {
  children: string;
  type: string;
  options: {
    label: string;
    link: string;
  }[];
}

export function DropdownMenuDesktop({
  children,
  type,
  options,
}: DropdownMenuProps) {
  return (
    <div className="relative inline-block">
      <div className="inline-flex items-center space-x-2 py-3 font-semibold text-[14px] uppercase group-hover:underline underline-offset-[5px] decoration-2 decoration-[#14d3d3]">
        {children}
        <ChevronDown color="#10a4a4" />
      </div>
      <div className="absolute hidden group-hover:block hover:block w-44 h-auto border shadow-md bg-white">
        {options.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className="block px-4 py-2 text-base font-normal decoration-1 underline-offset-4 hover:underline hover:bg-[#14d3d3]"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={`/${type}`}
          className="block px-4 py-2 text-base font-medium"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export function DropdownMenuMobile({
  children,
  type,
  options,
}: DropdownMenuProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="w-full">
      <div
        onClick={() => setOpenDropdown(!openDropdown)}
        className="w-full inline-flex justify-between items-center p-3 font-semibold text-sm uppercase border-t border-[#14d3d3]"
      >
        {children}
        {openDropdown ? (
          <ChevronUp color="#10a4a4" />
        ) : (
          <ChevronDown color="#10a4a4" />
        )}
      </div>
      {openDropdown ? (
        <div className="w-full">
          {options.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="block px-5 py-2 text-base font-normal decoration-1 underline-offset-4 hover:underline hover:bg-[#14d3d3]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${type}`}
            className="block px-4 py-2 text-base font-medium"
          >
            View All
          </Link>
        </div>
      ) : null}
    </div>
  );
}
