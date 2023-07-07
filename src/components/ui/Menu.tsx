import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface MenuProps {
  children: string;
  type: string;
  options: {
    label: string;
    link: string;
  }[];
}

export function Menu({ children, type, options }: MenuProps) {
  return (
    <div className="group relative inline-block cursor-pointer">
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
