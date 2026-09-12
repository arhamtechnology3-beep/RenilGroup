/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid parent-directory lockfile interference on Hostinger / nested paths
  outputFileTracingRoot: process.cwd(),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
