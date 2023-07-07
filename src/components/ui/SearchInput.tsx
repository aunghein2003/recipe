"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center p-1 space-x-2 border-b-2 border-b-slate-300"
    >
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" bg-inherit focus:outline-none placeholder:italic"
      />
      <Search className="text-xs  text-slate-400" />
    </form>
  );
}
