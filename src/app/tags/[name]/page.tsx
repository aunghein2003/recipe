"use client";

import TagsComponent from "@/components/tags";
import { useParams } from "next/navigation";

export default function Tags() {
  const { name } = useParams();

  return (
    <div className="my-[10vh] min-h-[30vh]">
      <TagsComponent name={name} />
    </div>
  );
}
