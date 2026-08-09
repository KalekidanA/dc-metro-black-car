import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { tenant } from "@/config/tenant";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: tenant.tagline,
    description: tenant.serviceArea.summary,
    path: "/",
  }),
  metadataBase: new URL(tenant.site.domain),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-black">
        <JsonLd data={localBusinessSchema()} />

        {/*
          GA4 PLACEHOLDER — drop in your Measurement ID via
          tenant.site.gaMeasurementId in config/tenant.ts to enable.
          A CallRail (or similar) dynamic number insertion snippet can also
          be added here without touching any page content.
        */}
        {tenant.site.gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${tenant.site.gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${tenant.site.gaMeasurementId}');
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
