import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// const satoshi = localFont({
//   src: [
//     {
//       path: "public/fonts/Satoshi-Black.woff2",
//       weight: "900",
//     },
//     {
//       path: "/public/fonts/Satoshi-Bold.woff2",
//       weight: "700",
//     },
//     {
//       path: "/public/fonts/Satoshi-Medium.woff2",
//       weight: "500",
//     },
//     {
//       path: "/public/fonts/Satoshi-Regular.woff2",
//       weight: "400",
//     },
//     {
//       path: "/public/fonts/Satoshi-Light.woff2",
//       weight: "300",
//     },
//   ],
// });

export const metadata = {
  title: "Harshvardhan Agarwal",
  description: "I'm a product designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
