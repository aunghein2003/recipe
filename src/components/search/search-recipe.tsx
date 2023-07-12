import { getFetcher } from "@/lib/fetcher";
import RecipeCard from "../ui/recipe-card";
import { memo } from "react";

interface SearchRecipeProps {
  query: string;
}

async function SearchRecipe({ query }: SearchRecipeProps) {
  const data = await getFetcher("recipes/list", {
    from: "0",
    size: "24",
    q: query,
  });

  if (!data) {
    return (
      <div className="mb-5 flex flex-col justify-center items-center font-serif">
        <h3 className="text-2xl">No results found for your search.</h3>
        <h3 className="text-xl">Please try another search term</h3>
      </div>
    );
  }

  return (
    <div className=" mt-[7vh] space-y-5">
      <h1 className="text-4xl font-medium font-serif">Search Results</h1>
      <div className="flex justify-stretch items-center flex-wrap gap-6 xl:gap-7">
        {data?.results.map((recipe: any) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            image={recipe.thumbnail_url}
            total_time={recipe.total_time_minutes ?? 60}
            user_rating={recipe.user_ratings?.score ?? 3.5}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(SearchRecipe);
