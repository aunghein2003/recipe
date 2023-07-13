import RecipeCard from "@/components/ui/recipe-card";
// import data from "../home/recipes.json";
import { getFetcher } from "@/lib/fetcher";

interface TagsComponentProps {
  name: string;
}

export default async function TagsComponent({ name }: TagsComponentProps) {
  const data = await getFetcher("recipes/list", {
    from: "0",
    size: "24",
    tags: name,
  });

  return (
    <div className="mt-[7vh] p-10 space-y-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium font-serif">
        Tags : {name}
      </h1>

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
