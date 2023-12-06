import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";

const inter = Inter({ subsets: ["latin"] });

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
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <FooterNew />
      </body>
    </html>
  );
}

// legrange interpolation
// Homorphic
// Full and partially
