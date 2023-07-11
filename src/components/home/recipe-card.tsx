import { Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface RecipeCardProps {
  id: number;
  name: string;
  image: string;
  total_time: number;
  user_rating: number;
}

export default function RecipeCard({
  id,
  name,
  image,
  total_time,
  user_rating,
}: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${id}`}
      className="relative group w-full sm:w-[45%] md:w-[30%] xl:w-[23%] min-h-[40vh] md:min-h-[30vh] lg:min-h-[60vh] xl:min-h-[50vh]"
    >
      <div className="absolute left-[2.5%] bottom-2 w-[95%] h-1/2 xl:h-[40%] min-h-max p-3 z-30 border-2 flex flex-col justify-between bg-white opacity-[0.89] group-hover:opacity-100 transition-colors duration-300">
        <h3 className="text-lg font-bold font-sans">{name}</h3>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Clock />
            <p>{total_time} mins</p>
          </div>
          {user_rating && (
            <div className="flex space-x-2">
              <Star className=" text-lime-600" />
              <p>{user_rating.toFixed(1)}</p>
            </div>
          )}
        </div>
      </div>
      <Image src={image} alt="recipe card" fill className="object-cover" />
    </Link>
  );
}
