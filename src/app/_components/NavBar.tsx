"use client";
import Link from "next/link";
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut, UserButton,
} from "@clerk/nextjs";

const routes: { title: string; href: string }[] = [
  // { title: "Features", href: "#features" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex h-16 items-center justify-between px-6 lg:px-14">
      <div className="flex items-center">
        <Link href={"/"} className="shrink-0">
          <h1 className="text-accent-foreground text-2xl font-bold">polylens</h1>
        </Link>
        <div className="bg-background hidden w-full justify-end gap-1 px-4 py-2 sm:flex">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className={`hover:text-accent-foreground text-muted-foreground inline-flex h-10 w-full items-center px-4 py-2 text-sm transition-colors sm:w-auto`}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden items-center gap-2 sm:flex">
        <SignedOut>
          <Link href={"/sign-in"} className="w-full sm:w-auto">
            <Button variant="secondary" size="sm" className="w-full">
              Log In
            </Button>
          </Link>
        </SignedOut>

        <SignedIn>
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button variant="default" size="sm" className="w-full">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </SignedIn>

      </div>

      {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}

      <button onClick={toggleMenu} className="sm:hidden">
        {menuOpen ? (
          <XMarkIcon className="h-7 w-7" />
        ) : (
          <Bars3Icon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
};

const MobileMenu: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  return (
    <div className="absolute right-0 top-16 flex h-[calc(100vh-64px)] w-full flex-col">
      <div className="bg-background  flex w-full grow flex-col gap-1 px-4 pb-2">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.href}
            onClick={toggleMenu}
            className={`hover:text-accent-foreground text-muted-foreground inline-flex h-10 w-full items-center text-sm transition-colors sm:w-auto`}
          >
            {route.title}
          </Link>
        ))}

        <SignedOut>
          <Link href={"/sign-in"} className="w-full sm:w-auto">
            <Button variant="secondary" size="sm" className="w-full">
              Log In
            </Button>
          </Link>
        </SignedOut>

        <SignedIn>
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button variant="default" size="sm" className="w-full">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </SignedIn>
      </div>
      <div className="bg-background/60 h-screen w-full sm:hidden" />
    </div>
  );
};

export default Navbar;