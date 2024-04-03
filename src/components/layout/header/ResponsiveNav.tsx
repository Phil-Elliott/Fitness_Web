import Link from "next/link";
import { responsiveNavLinks } from "@/constants/responsiveNavLinks";
import React from "react";

const ResponsiveNav = () => {
  return (
    <nav className="fixed bottom-0 flex sm:hidden bg-white w-full font-semibold py-2 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {responsiveNavLinks.map((link) => (
          <Link
            href={link.route}
            className="text-primary flex flex-col gap-2 items-center"
            key={link.name}
          >
            {React.createElement(link.icon, {
              className: "text-xl",
            })}{" "}
            <span className="text-xs">{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default ResponsiveNav;
