import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import Header from "@/components/layout/header/Header";

import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col min-h-screen overflow-x-hidden bg-secondary text-primary font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <div className="pt-20 pb-16 flex-grow container mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
