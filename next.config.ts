import type { NextConfig } from "next";

/**
 * GitHub Pages serves this site from a /<repo> subpath (no custom domain
 * configured yet), so basePath/assetPrefix are only applied when building
 * for that target — set via GITHUB_PAGES=true in the deploy workflow.
 * Local dev and `npm run build` without that env var behave like a normal
 * root-hosted Next.js app.
 */
const repoName = "dc-metro-black-car";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
