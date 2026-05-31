import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import { organizationSchema, webSiteSchema } from "@/lib/jsonLd";

export const metadata: Metadata = {
  title: {
    default: "MACRA - Malawi Communications Regulatory Authority",
    template: "%s | MACRA",
  },
  description:
    "MACRA regulates and monitors the provision of communications services in Malawi, ensuring reliable and affordable services throughout the country.",
  metadataBase: new URL("https://tafika-itaye.github.io"),
  openGraph: {
    siteName: "MACRA - Malawi Communications Regulatory Authority",
    locale: "en_US",
    type: "website",
    url: "https://tafika-itaye.github.io/macra-web",
    images: [
      {
        url: "/macra-web/images/macra-logo.png",
        width: 200,
        height: 60,
        alt: "MACRA - Malawi Communications Regulatory Authority",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MACRA - Malawi Communications Regulatory Authority",
    description:
      "MACRA regulates and monitors the provision of communications services in Malawi.",
    images: ["/macra-web/images/macra-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-src https://maps.google.com https://www.google.com/maps; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-macra-blue focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

