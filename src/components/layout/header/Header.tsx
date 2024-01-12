import React from "react";
import { headerLinks } from "@/constants/HeaderLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoFitness } from "react-icons/io5";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 bg-secondary w-full flex lg:justify-between items-center font-semibold py-4 z-50 border-gray-300 border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden lg:flex">
          <a href="/" className="flex items-center space-x-2">
            <IoFitness className="text-2xl text-primary" />
            <p className="text-primary">FitMax</p>
          </a>
          {headerLinks.map((link) => (
            <a
              href={link.route}
              className="ml-8 text-primary hover:text-accent"
              key={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a href="/settings" className="flex items-center space-x-3">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          <p className="font-bold">Phil</p>
        </a>
      </div>
    </header>
  );
};

export default Header;

/*

logo
Dashboard
Workouts
Routines


Avatar and name to right


*/
