/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  exportTrailingSlash: true,
  async exportPathMap(defaultPathMap) {
    return {
      "/": { page: "/" },
    };
  },
};

export default nextConfig;
