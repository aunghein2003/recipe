"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

export function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search/?query=${search}`);
    setOpenSearch(false);
    setSearch("");
  };

  return (
    <div className=" w-6">
      {openSearch ? (
        <form
          onSubmit={handleSubmit}
          className="absolute right-2 top-[2vh] flex items-center p-2 space-x-2 border-2 border-b-slate-300 bg-[#E2F3F3]"
        >
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" bg-inherit focus:outline-none placeholder:italic"
          />
          <button type="submit"></button>
          <button onClick={() => setOpenSearch(false)}>
            <X color="#9ca3af" />
          </button>
        </form>
      ) : (
        <button className="w-full" onClick={() => setOpenSearch(true)}>
          <Search className="text-xs  text-white" />
        </button>
      )}
    </div>
  );
}
