import { Spacing } from "@/app/components/ui/Spacing";

import { getAllPosts } from "@/app/utils/posts";

import { FeaturedPostSection } from "@/app/(main)/_components/FeaturedPostSection";
import { HeroSection } from "@/app/(main)/_components/HeroSection";
import { PopularTags } from "@/app/(main)/_components/PopularTags";
import { ProfileCard } from "@/app/(main)/_components/ProfileCard";
import { RecentPostsSection } from "@/app/(main)/_components/RecentPostsSection";

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(1, 4);

  return (
    <div className="w-full">
      <HeroSection />
      <Spacing direction="vertical" size={40} />
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              {featuredPost && <FeaturedPostSection post={featuredPost} />}
              {recentPosts.length > 0 && <RecentPostsSection posts={recentPosts} />}
            </div>
          </main>

          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <ProfileCard />
              <PopularTags posts={allPosts} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
