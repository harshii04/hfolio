import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const Satoshi = localFont({
  src: [
    {
      path: "../app/fonts/Satoshi-Black.woff2",
      weight: "900",
    },
    {
      path: "../app/fonts/Satoshi-Bold.woff2",
      weight: "700",
    },
    {
      path: "../app/fonts/Satoshi-Medium.woff2",
      weight: "500",
    },
    {
      path: "../app/fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "../app/fonts/Satoshi-Light.woff2",
      weight: "300",
    },
  ],
});

export const metadata = {
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
      <body suppressHydrationWarning={true} className={Satoshi.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
