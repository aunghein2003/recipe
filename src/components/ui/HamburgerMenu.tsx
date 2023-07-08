"use client";

import { useState, useRef, useEffect } from "react";
import { MobileMenu } from "./Menu";

export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div ref={ref} className="block lg:hidden">
      {openMenu ? (
        <div>
          <button
            onClick={() => setOpenMenu(false)}
            className="rounded hover:bg-slate-200 active:bg-slate-400 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="35"
              height="35"
            >
              <path
                fill="#fff"
                d="M51.092 15.737L48.263 12.908 32 29.172 15.737 12.908 12.908 15.737 29.172 32 12.908 48.263 15.737 51.092 32 34.828 48.263 51.092 51.092 48.263 34.828 32z"
              />
            </svg>
          </button>
          <div className="absolute left-0 top-[10vh] w-full sm:w-1/2 md:w-1/3 max-h-[60vh] overflow-y-auto shadow-md bg-white border border-slate-300">
            <MobileMenu />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpenMenu(true)}
          className="rounded hover:bg-slate-200 active:bg-slate-400 transition-all duration-200"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 15C3 14.4477 3.44772 14 4 14H10C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16H4C3.44772 16 3 15.5523 3 15Z"
              fill="#fff"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
