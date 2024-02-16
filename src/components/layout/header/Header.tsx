import DashboardNav from "./DashboardNav";
import LandingPageNav from "./LandingPageNav";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 bg-secondary w-full flex lg:justify-between items-center font-semibold py-4 z-50 border-gray-200 border-b">
      <SignedOut>
        <LandingPageNav />
      </SignedOut>
      <SignedIn>
        <DashboardNav />
      </SignedIn>
    </header>
  );
};

export default Header;
