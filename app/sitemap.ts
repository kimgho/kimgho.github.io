import { MetadataRoute } from "next";

import { getAllPosts } from "@/app/utils/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kimgho.github.io";

  const posts = getAllPosts();
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const staticRoutes = ["", "/posts", "/introduction"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postUrls];
}
