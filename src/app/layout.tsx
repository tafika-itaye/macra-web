import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/ui/JsonLd";
import CookieBanner from "@/components/ui/CookieBanner";
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
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://plausible.io; frame-src https://maps.google.com https://www.google.com/maps; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
        <script defer data-domain="tafika-itaye.github.io" src="https://plausible.io/js/script.js" />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-[#E30613] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      {/* MacraDocIntel WhatsApp assistant */}
      <a
        href="https://wa.me/265995753326?text=Hello%2C%20I%20have%20a%20question%20about%20MACRA%20regulations."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MACRA DocIntel on WhatsApp"
        className="fixed bottom-6 right-20 z-50 flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-[#1ebe5d] transition-all"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Ask DocIntel
      </a>
      </body>
    </html>
  );
}

