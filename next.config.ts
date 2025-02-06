import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true, // Use 'true' if the redirect is permanent (301), otherwise use 'false' for temporary (307)
      },
    ];
  },
};

export default nextConfig;
