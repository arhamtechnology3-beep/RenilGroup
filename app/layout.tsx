import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloater } from "@/components/layout/whatsapp-floater";
import { ContactSticky } from "@/components/layout/contact-sticky";
import { JsonLd, organizationJsonLd } from "@/components/ui/json-ld";
import { defaultSeo } from "@/content/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(defaultSeo.siteUrl),
  title: {
    default: defaultSeo.defaultTitle,
    template: defaultSeo.titleTemplate,
  },
  description: defaultSeo.defaultDescription,
  keywords: defaultSeo.keywords,
  authors: [{ name: "Renil Groups" }, { name: "Swapnil Shinde" }],
  creator: "Renil Groups",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: defaultSeo.defaultTitle,
    description: defaultSeo.defaultDescription,
    url: defaultSeo.siteUrl,
    siteName: defaultSeo.siteName,
    images: [
      {
        url: defaultSeo.ogImage,
        width: 1200,
        height: 630,
        alt: defaultSeo.ogImageAlt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSeo.defaultTitle,
    description: defaultSeo.defaultDescription,
    images: [defaultSeo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <JsonLd data={organizationJsonLd} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f8f5ee] text-[#22201d] antialiased selection:bg-[#a98345]/20 selection:text-[#22201d]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloater />
        <ContactSticky />
      </body>
    </html>
  );
}
