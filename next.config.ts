import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   images: {
      domains: ['flagcdn.com'], // Replace with the actual domains
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'flagcdn.com',
            pathname: '/**',
         },
      ],
   },
};

export default nextConfig;
