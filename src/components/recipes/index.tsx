import Link from "next/link";
import Image from "next/image";
import { getFetcher } from "@/lib/fetcher";

interface RecipeComponentProps {
  id: number;
}

export default async function RecipeComponent({ id }: RecipeComponentProps) {
  const data = await getFetcher("recipes/get-more-info", { id });

  return (
    <div className="max-w-5xl mx-auto py-[3vh] lg:pt-[6vh] px-5">
      {/* Name and Description */}
      <div className="font-serif">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">
          {data?.name}
        </h1>
        <p className="pt-3 text-lg md:text-xl lg:text-2xl text-slate-700">
          {data?.description}
        </p>
      </div>

      {/* Images */}
      <div className="relative mx-auto mt-7 w-full md:w-2/3 min-h-[40vh] md:min-h-[45vh] xl:min-h-[60vh]">
        <Image fill src={data?.thumbnail_url} alt={data?.thumbnail_alt_text} />
      </div>

      {/* Ingredients */}
      <div className="mt-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-medium pb-5 border-b border-dashed border-b-primary">
          Ingredients
        </h1>
        <ul className="pt-5 pl-6 list-disc space-y-3 text-lg">
          {data?.sections?.map((comp: any) =>
            comp?.components?.map((ingredient: any) => (
              <li key={ingredient?.id}>{ingredient?.raw_text}</li>
            ))
          )}
        </ul>
      </div>

      {/* Videos */}
      <div className="mt-10 p-3 w-[80%] sm:w-[50%] aspect-video mx-auto bg-orange-200">
        <h3 className="text-xl py-3 font-serif">
          How to Make {data?.slug || data?.name}
        </h3>
        <video className="" controls>
          <source src={data?.original_video_url} type="video/mp4" />
        </video>
      </div>

      {/* Instructions */}
      <div className="mt-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-medium pb-5 border-b border-dashed border-b-primary">
          Instructions
        </h1>
        <ul className="pt-5 pl-6 space-y-3 text-lg list-decimal">
          {data?.instructions?.map((instruction: any) => (
            <li key={instruction?.id}>{instruction?.display_text}</li>
          ))}
        </ul>
      </div>

      {/* Nutritions */}
      <div className="mt-14 mx-auto p-5 max-w-max rounded-md border-2 border-primary">
        <h3 className="text-lg font-semibold uppercase text-primary">
          Nutrition Facts
          <span className="text-xs font-medium text-black"> (per serving)</span>
        </h3>
        <div className="flex flex-wrap gap-x-9 gap-y-5 mt-5 [&>div>h5]:uppercase [&>div>h5]:font-semibold [&>div>h5]:text-sm [&>div>h4]:text-lg [&>div>h4]:text-primary">
          <div>
            <h4>{data?.nutrition.calories ?? 0}g</h4>
            <h5>calories</h5>
          </div>
          <div>
            <h4>{data?.nutrition.sugar ?? 0}g</h4>
            <h5>sugar</h5>
          </div>
          <div>
            <h4>{data?.nutrition.carbohydrates ?? 0}g</h4>
            <h5>carbs</h5>
          </div>
          <div>
            <h4>{data?.nutrition.fat ?? 0}g</h4>
            <h5>fat</h5>
          </div>
          <div>
            <h4>{data?.nutrition.fiber ?? 0}g</h4>
            <h5>fiber</h5>
          </div>
          <div>
            <h4>{data?.nutrition.protein ?? 0}g</h4>
            <h5>protein</h5>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex space-x-5 mt-16">
        <h3 className="tex-xl font-semibold">Tags:</h3>
        <div className="flex flex-wrap gap-3 uppercase font-semibold text-sm">
          {data?.tags?.map((tag: any) => (
            <span
              key={tag?.id}
              className="p-1.5 text-red-900 bg-rose-50 hover:bg-rose-200 transition-colors duration-300"
            >
              <Link href={`/tags/${tag?.name}`}>{tag?.display_name}</Link>
            </span>
          ))}
        </div>
      </div>

      {/* Similiarity */}
      {data?.compilations.length ? (
        <div className="flex flex-wrap gap-5 mt-20">
          {data.compilations?.map((compilation: any) => (
            <div
              className="relative w-full sm:w-[45%] lg:w-[30%] h-[30vh]"
              key={compilation.id}
            >
              <Image
                fill
                src={compilation.thumbnail_url}
                alt="compilations"
                className="object-fill"
              />
              <Link
                href={`/recipes/${compilation.id}`}
                className="z-30 p-3 w-full absolute bottom-0 left-0 tex-xl font-semibold text-white bg-black/30 hover:bg-black/50"
              >
                {compilation.name}
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
