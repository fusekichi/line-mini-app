import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 本番ビルド時のESLintチェックを無効化
    ignoreDuringBuilds: true
  },
  // 問題のある特定のAPIルートを一時的に除外
  excludeDefaultPages: [
    '/api/richmenu/assign',
    '/api/richmenu'
  ]
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     // 本番ビルド時のESLintチェックを無効化
//     ignoreDuringBuilds: true,
//   },
// }

// module.exports = nextConfig