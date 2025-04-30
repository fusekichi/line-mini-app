// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 本番ビルド時のESLintチェックを無効化
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig