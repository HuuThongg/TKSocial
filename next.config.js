/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    });

    return config;
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['uploadthing.com', 'utfs.io', 'img.clerk.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig
