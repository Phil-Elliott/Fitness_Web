import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="py-4 w-full px-4 md:px-6 border-gray-200 border-t">
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row gap-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Fitmax. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
