import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["172.18.0.2"],
};

export async function headers() {
  return [
    {
      source: "/:path*",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "default-src 'self'; script-src 'self' 'sha256-OUKPiVFHRxeoRY5pYmzMR0ennXiz9gZjncNgBDny2F4='; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; frame-ancestors 'self';",
        },
      ],
    },
  ];
}

export default nextConfig;
