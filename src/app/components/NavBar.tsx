import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => (
  <nav className="bg-black bg-opacity-80 py-4 px-8 flex items-center gap-8">
    <Link href="/" className="text-2xl font-bold text-purple-600 hover:text-red-600">
      MovieDB
    </Link>
    <Link href="/signin" className="text-gray-200 hover:text-purple-400">
      Sign In
    </Link>
    <Link href="/favorites" className="text-gray-200 hover:text-purple-400">
      Favorites
    </Link>
  </nav>
);

export default NavBar;