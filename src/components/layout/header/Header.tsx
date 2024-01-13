import React from "react";
import Link from "next/link";
import { headerLinks } from "@/constants/HeaderLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoFitness } from "react-icons/io5";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 bg-secondary w-full flex lg:justify-between items-center font-semibold py-4 z-50 border-gray-200 border-b-2">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <Link href="/" className="flex items-center space-x-2">
            <IoFitness className="text-2xl text-primary" />
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
        <Link href="/settings" className="flex items-center space-x-3">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          <p className="">Phil</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;