import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
        alternates: { canonical: "/" },
      }
    : {}),
  title: {
    default: "Binaya Chaudhary | Shopify App Developer & Full-Stack Engineer",
    template: "%s | Binaya Chaudhary",
  },
  description:
    "Meet Binaya Chaudhary, a Shopify app developer and full-stack engineer in Bhaktapur, Nepal. Explore Shopify apps, React, Remix, Laravel, and web projects.",
  keywords: [
    "Binaya Chaudhary",
    "Shopify app developer Nepal",
    "Shopify developer",
    "full-stack web developer Nepal",
    "React developer",
    "Remix developer",
    "Laravel developer",
  ],
  authors: [
    {
      name: "Binaya Chaudhary",
      url: "https://www.linkedin.com/in/binayachaudhary/",
    },
  ],
  creator: "Binaya Chaudhary",
  openGraph: {
    type: "profile",
    locale: "en_US",
    title: "Binaya Chaudhary | Shopify App Developer & Full-Stack Engineer",
    description:
      "Shopify app developer and full-stack engineer in Bhaktapur, Nepal. Explore selected projects and experience.",
    siteName: "Binaya Chaudhary",
  },
  twitter: {
    card: "summary",
    title: "Binaya Chaudhary | Shopify App Developer",
    description:
      "Shopify app developer and full-stack engineer based in Bhaktapur, Nepal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Binaya Chaudhary",
    jobTitle: "Shopify App Developer and Full-Stack Engineer",
    description:
      "Shopify app developer and full-stack web engineer based in Bhaktapur, Nepal.",
    ...(siteUrl ? { url: siteUrl } : {}),
    sameAs: ["https://www.linkedin.com/in/binayachaudhary/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhaktapur",
      addressCountry: "NP",
    },
    knowsAbout: [
      "Shopify app development",
      "React",
      "Remix",
      "Shopify Polaris",
      "Shopify Admin API",
      "Laravel",
      "PHP",
      "MySQL",
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
