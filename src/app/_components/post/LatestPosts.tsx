import PostsCard from "@/app/_components/post/PostsCard";
import { getAllPosts } from "@/lib/mdx";

export default async function LatestPosts() {
  const allPosts = await getAllPosts();

  const latestPosts = allPosts.slice(0, 3);

  return (
    <section className="container mx-auto px-2 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-3xl font-bold">{">_Latest Posts"}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <PostsCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description || ""}
              date={post.date}
              tags={Array.isArray(post.tags) ? post.tags : undefined}
              thumbnail={
                typeof post.thumbnail === "string" ? post.thumbnail : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
