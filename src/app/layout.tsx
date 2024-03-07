import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
}) as unknown as { [x: string]: never };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
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
    </ClerkProvider>
  );
}

/*

- start by creating a template activity
- then a template activity with a cardio
- then a template cardio
- then a routine for activitys and cardios 
- then a activity on the fly
- then completing those activitys and cardios

*/
