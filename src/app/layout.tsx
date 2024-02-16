import { ClerkProvider } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";
import "../styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
}) as unknown as { [x: string]: never };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if (userId) {
    // console.log("User is logged in", userId);
    getUser();
  }

  async function getUser() {
    const user = await currentUser();
    if (user) {
      const timeSinceCreation = (user.lastSignInAt as number) - user.createdAt;

      if (timeSinceCreation <= 120000) {
        createUser();
      }
      // console.log("User", user);
    }
  }

  async function createUser() {
    console.log("Creating user");
  }

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

1) Make a call to the database if this is the users first sign in and save all of the users data to the database
save 
- clerk id
- email
- username

2) If the user has already signed in before then just save the id to the state (get zustand working and then remove redux)
3) Pull the data from the database and display it on the dashboard
  - not sure what yet



*/
