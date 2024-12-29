import { getAllPosts } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-4 py-8 mt-16">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">블로그 포스트</h1>
        <p className="text-gray-600">개발 이야기와 일상을 기록합니다</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.thumbnail || "/test.webp"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  {post.tags && (
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
