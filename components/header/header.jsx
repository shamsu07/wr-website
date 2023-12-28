"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import wrLogo from "../../public/images/header/header-logo.svg";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  // Sticky menu
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setStickyMenu(scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-black fixed top-0 w-full z-50  ${
        stickyMenu ? " transition-all duration-0" : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Wealth Right</span>
            <Image className="w-3/4" src={wrLogo} alt="Wealth Right Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          {setMobileMenuOpen && <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>}
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/about"
            className="text-sm  leading-6 text-white hover:text-spiroDiscoBall"
          >
            ABOUT US
          </Link>
          <Link
            href="/products"
            className="text-sm  leading-6 text-white hover:text-spiroDiscoBall"
          >
            OUR PRODUCTS
          </Link>
          <Link
            href="/partner"
            className="text-sm  leading-6 text-white hover:text-spiroDiscoBall"
          >
            PARTNER WITH US
          </Link>
          <Link
            href="/contact"
            className="text-sm  leading-6 text-white hover:text-spiroDiscoBall"
          >
            CONTACT US
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full max-h-fit bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Wealth Right</span>
              <Image className="w-3/4" src={wrLogo} alt="Wealth Right Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-300">
              <div className="space-y-2 py-6">
                <ul>
                  <li>
                    <Link
                      href="/about"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-spiroDiscoBall hover:text-black"
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-spiroDiscoBall hover:text-black"
                    >
                      OUR PRODUCTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partner"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-spiroDiscoBall hover:text-black"
                    >
                      PARTNER WITH US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-spiroDiscoBall hover:text-black"
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
