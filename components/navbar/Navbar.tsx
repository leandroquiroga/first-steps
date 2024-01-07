import React from 'react';
import Link from 'next/link';
import { HomeIcon } from '@primer/octicons-react';
import { ActiveLink } from '..';

interface NavItemsPros {
  path: string;
  text: string
}

const navItems: NavItemsPros[] = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mx-1" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.text} {...navItem} />
      ))}
    </nav>
  );
};

