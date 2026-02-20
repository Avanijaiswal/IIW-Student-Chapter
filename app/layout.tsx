import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; 
import InteractiveBackground from "./components/InteractiveBackground";
//import { Antonio } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"], // 800 is extra bold and wide
  variable: "--font-syne",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "IIW Student Chapter | Marwadi University",
  description: "Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${syne.variable} antialiased bg-[#0a0a0a]`}>
        <InteractiveBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}