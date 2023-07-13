"use client";

import { useParams } from "next/navigation";
import RecipeComponent from "@/components/recipes";

export default function RecipeDetail() {
  const { id } = useParams();

  return (
    <div className="my-[10vh] min-h-[30vh]">
      <RecipeComponent id={Number(id)} />
    </div>
  );
}
