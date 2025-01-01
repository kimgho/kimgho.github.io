import { getAllPosts } from "@/lib/mdx";
import RenderPost from "@/app/posts/RenderPost";

export default async function Page() {
  const posts = await getAllPosts();
  return <RenderPost posts={posts} />;
}
