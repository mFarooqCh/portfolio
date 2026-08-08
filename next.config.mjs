/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deliberately NOT using `output: 'export'`.
  // Static export would disable route handlers, and the contact form needs one
  // (see the TODO(form) in app/page.tsx). Vercel prerenders these pages as
  // static HTML anyway, so we get the same delivery without closing that door.
  reactStrictMode: true,
};

export default nextConfig;
