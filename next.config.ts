import type { NextConfig } from "next";
// import bundleAnalyzer from "@next/bundle-analyzer";
import withMDX from "@next/mdx";

const isProduction = process.env.NODE_ENV === "production";
// const analyzing = process.env.ANALYZE === "true";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? "/glog" : "",
  images: {
    unoptimized: true,
  },
};
// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: analyzing,
//   openAnalyzer: true,
// });

// export default withBundleAnalyzer(nextConfig);
export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
