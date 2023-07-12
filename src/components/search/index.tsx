"use client";

import { FormEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchRecipe from "./search-recipe";

export default function SearchComponents() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${searchInput}`);
    setSearchInput("");
  };

  return (
    <div className="p-10">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center space-x-2 w-full md:w-1/2 xl:w-1/3 mx-auto "
      >
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Find something else"
          className="pl-1 md:px-4 py-2 rounded-[4px] flex-1 border-2 bg-inherit focus:outline-none"
        />
        <button className="px-2 md:px-4 py-2 rounded-[4px] bg-primary text-white hover:bg-red-700">
          Search
        </button>
      </form>

      {!query ? (
        <div className="mt-8 flex flex-col justify-center items-center text-center font-serif">
          <h3 className="text-xl sm:text-2xl">
            No results found for your search.
          </h3>
          <h3 className="text-lg sm:text-xl">Please try another search term</h3>
        </div>
      ) : (
        <SearchRecipe query={query} />
      )}
    </div>
  );
}
