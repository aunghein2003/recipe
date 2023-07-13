/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ["img.buzzfeed.com", "randomuser.me", "s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
