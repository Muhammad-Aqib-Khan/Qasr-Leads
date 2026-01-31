import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "QASR | Threads of Royalty",
  description: "Join the Royal Court of QASR - Premium Pakistani Women Fashion. Exclusive early access and royal rewards await.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${openSans.variable} font-opensans antialiased bg-luxury-dark text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
