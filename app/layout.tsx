import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; 
import InteractiveBackground from "./components/InteractiveBackground";
import { Antonio } from "next/font/google";

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-antonio",
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
      <body className={`${poppins.className} ${antonio.variable} antialiased`}>
        {/* Only include these three specific layers */}
        <InteractiveBackground />
        
        <Navbar /> 
        
        <main className="relative z-10 pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}