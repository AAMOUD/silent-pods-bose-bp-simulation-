import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silent-pods.local"),
  title: {
    default: "Silent Pods | Pods insonorisés by Bose",
    template: "%s | Silent Pods",
  },
  description:
    "Silent Pods est une vitrine de concept pour des pods insonorisés Bose installés dans les gares, aéroports et centres commerciaux.",
  openGraph: {
    title: "Silent Pods",
    description:
      "Le calme là où vous ne l'attendez pas. Concept de pods insonorisés premium portés par Bose.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void-950 text-zinc-100">
        <div className="relative flex min-h-full flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}