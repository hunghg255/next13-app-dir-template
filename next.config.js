const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
