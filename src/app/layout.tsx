import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "MACRA - Malawi Communications Regulatory Authority",
    template: "%s | MACRA",
  },
  description:
    "MACRA regulates and monitors the provision of communications services in Malawi, ensuring reliable and affordable services throughout the country.",
  metadataBase: new URL("https://macra.mw"),
  openGraph: {
    siteName: "MACRA - Malawi Communications Regulatory Authority",
    locale: "en_US",
    type: "website",
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
