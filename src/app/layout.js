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
      <body className={satoshi.className}>
        {/* <Image
          src={noise}
          alt="This is my bg"
          className="absolute top-0 bottom-0 left-0 right-0 object-cover z-0 w-full h-full"
        /> */}
        {children}
      </body>
      <Footer />
    </html>
  );
}
