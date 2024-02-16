import Link from "next/link";
import { FitnessIcon } from "@/constants/icons";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const DashboardNav = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <div className="flex">
        <Link href="/" className="flex items-center space-x-2">
          <FitnessIcon className="text-2xl text-primary" />
          <p className="text-primary text-xl">FitMax</p>
        </Link>
      </div>
      <div className="flex gap-4">
        <SignUpButton>
          <Button className="px-6 h-8">Sign Up</Button>
        </SignUpButton>
        <SignInButton>
          <Button className="px-6 h-8" variant="outline">
            Log In
          </Button>
        </SignInButton>
      </div>
    </nav>
  );
};

export default DashboardNav;
