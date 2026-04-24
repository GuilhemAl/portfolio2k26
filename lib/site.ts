export const site = {
  name: "Guilhem Albus",
  title: "Guilhem Albus - Portfolio",
  description: "Portfolio personnel de Guilhem Albus.",
  ogImage: "/og-image-v2.png",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
};
