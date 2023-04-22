/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' js.stripe.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self' fonts.gstatic.com;
  media-src 'self' firebasestorage.googleapis.com;
  style-src-elem 'self' 'unsafe-inline' fonts.googleapis.com;
  frame-src 'self' js.stripe.com;
  script-src-elem 'self' va.vercel-scripts.com js.stripe.com;
  img-src 'self' portfolio-one-gamma-55.vercel.app;
  connect-src 'self' vitals.vercel-insights.com;
`;
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/y2w5k2uh/production/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
