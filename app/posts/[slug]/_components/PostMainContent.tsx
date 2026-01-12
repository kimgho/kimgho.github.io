import { MDXRemote } from "next-mdx-remote/rsc";

import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import { Callout } from "@/app/components/mdx/Callout";
import { Pre } from "@/app/components/mdx/Pre";

export function PostMainContent({ content }: { content: string }) {
  return (
    <section className="prose prose-slate max-w-none font-body prose-headings:font-display prose-headings:tracking-tight prose-headings:scroll-mt-28 prose-a:text-blue-600 prose-pre:bg-gray-main prose-pre:border prose-pre:border-slate-700">
      <MDXRemote
        source={content}
        components={{
          pre: Pre,
          Callout,
        }}
        options={{
          mdxOptions: {
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: "github-dark",
                  keepBackground: false,
                },
              ],
            ],
          },
        }}
      />
    </section>
  );
}
