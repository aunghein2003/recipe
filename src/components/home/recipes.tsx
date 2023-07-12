import { getFetcher } from "@/lib/fetcher";
import RecipeCard from "@/components/ui/recipe-card";

export default async function Recipes() {
  const data = await getFetcher("recipes/list", { from: "0", size: "12" });

  return (
    <div className="p-10 mb-[10vh]">
      <div className="text-center space-y-3 mb-12 w-full lg:w-1/2 xl:w-1/3 mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold font-serif">
          Popular Recipes
        </h1>
        <p className="text-slate-500">
          Of thousands of recipes that we have from various regions, this is the
          one that many people like
        </p>
      </div>

      <div className="flex justify-stretch items-center flex-wrap gap-6 xl:gap-7">
        {data?.results.map((recipe: any) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            image={recipe.thumbnail_url}
            total_time={recipe.total_time_minutes ?? 60}
            user_rating={recipe.user_ratings.score}
          />
        ))}
      </div>
    </div>
  );
}
