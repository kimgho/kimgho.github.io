import { Post } from "@/lib/mdx";
import { Dispatch, SetStateAction } from "react";

export interface CategoryProps {
  categories: { [key: string]: Post[] };
  selectedTag: string | null;
  setSelectedTagAction: Dispatch<SetStateAction<string | null>>;
}
