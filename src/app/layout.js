import "./globals.css";
import localFont from "next/font/local";

import Footer from "@/components/Footer";

const satoshi = localFont({
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
  description: "I'm a product designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true} className={satoshi.className}>
        {children}
      </body>
    </html>
  );
}
