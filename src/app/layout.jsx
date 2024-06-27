import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import FooterNew from "@/components/FooterNew";
import NavbarNew from "@/components/NavbarNew";

const inter = Inter({ subsets: ["latin"], variable: "-font-inter" });

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata = {
  metadataBase: "https://www.harshii.works/",
  title: "Harshvardhan Agarwal",
  type: "Portfolio",
  author: "Harshvardhan Agarwal",
  description: "I'm a product designer who loves crafting experiences.",
  theme: "light",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",

  twitter: {
    title: "Harshvardhan Agarwal | Product Designer",
    description: "I'm am an engineer turned product designer.",
    creator: "@harshii04",
    images: ["/src/app/twitter-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.variable}, ${fraunces.variable}`}
      >
        <NavbarNew />
        {children}
        <SpeedInsights />
        <Analytics />
        <FooterNew />
      </body>
    </html>
  );
}
