import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const isProduction = process.env.NODE_ENV === "production";
const analyzing = process.env.ANALYZE === "true";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? "/glog" : "",
  images: {
    unoptimized: true,
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: analyzing,
  openAnalyzer: true,
});

export default withBundleAnalyzer(nextConfig);
