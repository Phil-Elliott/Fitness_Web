import Link from "next/link";
import { headerLinks } from "@/constants/headerLinks";
import { FitnessIcon } from "@/constants/icons";
import { UserButton } from "@clerk/nextjs";

const DashboardNav = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <div className="flex">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <FitnessIcon className="text-2xl text-primary" />
          <p className="text-primary">FitMax</p>
        </Link>
        <div className="hidden sm:flex">
          {headerLinks.map((link) => (
            <Link
              href={link.route}
              className="ml-8 text-primary"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
};

export default DashboardNav;
