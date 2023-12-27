"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import wrLogo from "../../public/images/header/header-logo.svg";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


// const products = [
//   {
//     name: "Life Insurance",
//     description: "Secure your future with life insurance plans.",
//     href: "/products#life",
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: "Health Insurance",
//     description: "Take care of your well-being with health insurance coverage.",
//     href: "/products#health",
//     icon: HeartIcon,
//   },
//   {
//     name: "Mutual Funds",
//     description: "Invest wisely in mutual funds for a secure financial future.",
//     href: "/products#mutual-fund",
//     icon: ArrowTrendingUpIcon,
//   },
//   {
//     name: "Motor & Travel Insurance",
//     description: "Stay protected on the road and during your travels.",
//     href: "/products#motor-travel",
//     icon: TruckIcon,
//   },
//   {
//     name: "Fixed Deposits",
//     description: "Grow your savings with reliable fixed deposit schemes.",
//     href: "/products#fixed-deposit",
//     icon: RectangleStackIcon,
//   },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  
  // Sticky menu
 useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setStickyMenu(scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {/* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-white hover:text-spiroDiscoBall">
              OUR PRODUCTS
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-formBlack"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-blueSapphire ">
                        <item.icon
                          className="h-6 w-6 text-white bg-blueSapphire group-hover:text-spiroDiscoBall"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block text-white">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}

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
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-300">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 text-white hover:bg-spiroDiscoBall hover:text-black">
                        OUR PRODUCTS
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-white hover:bg-spiroDiscoBall hover:text-black"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-spiroDiscoBall hover:text-black"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-spiroDiscoBall hover:text-black"
                >
                  OUR PRODUCTS
                </Link>
                <Link
                  href="/partner"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-spiroDiscoBall hover:text-black"
                >
                  PARTNER WITH US
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-spiroDiscoBall hover:text-black"
                >
                  CONTACT US
                </Link>
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import wrLogo from "../../public/images/header/header-logo.svg";

// // import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";

// const Header = () => {
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [dropdownToggler, setDropdownToggler] = useState(false);
//   const [stickyMenu, setStickyMenu] = useState(false);

//   const pathUrl = usePathname();

//   // Sticky menu
//   const handleStickyMenu = () => {
//     if (window.scrollY >= 80) {
//       setStickyMenu(true);
//     } else {
//       setStickyMenu(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyMenu);
//   });

//   return (
//     <header
//       className={` left-0 top-0 z-99999 w-full py-2 bg-black text-white ${
//         stickyMenu ? "fixed shadow transition duration-100" : ""
//       }`}
//     >
//       <div className="relative mx-auto max-w-c-1390 flex items-center justify-between px-4 md:px-8 xl:px-0">
//         <div className="flex  items-center gap-4 xl:w-1/4">
//           <a href="/" className="ml-4 md:ml-8 lg:ml-16 xl:ml-24 2xl:ml-40">
//             <Image
//               src={wrLogo}
//               alt="logo"
//               // width={100}
//               // height={20}
//               className="w-3/4"
//             />
//           </a>

//           {/* <!-- Hamburger Toggle BTN --> */}
//           <button
//             aria-label="hamburger Toggler"
//             className="block xl:hidden"
//             onClick={() => setNavigationOpen(!navigationOpen)}
//           >
//             <span className="relative block h-5.5 w-5.5 cursor-pointer">
//               <span className="absolute right-0 block h-full w-full">
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-[0] duration-200 ease-in-out  ${
//                     !navigationOpen ? "!w-full delay-300" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out  ${
//                     !navigationOpen ? "delay-400 !w-full" : "w-0"
//                   }`}
//                 ></span>
//                 <span
//                   className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out  ${
//                     !navigationOpen ? "!w-full delay-500" : "w-0"
//                   }`}
//                 ></span>
//               </span>
//               <span className="du-block absolute right-0 h-full w-full rotate-45">
//                 <span
//                   className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out  ${
//                     !navigationOpen ? "!h-0 delay-[0]" : "h-full"
//                   }`}
//                 ></span>
//                 <span
//                   className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out  ${
//                     !navigationOpen ? "!h-0 delay-200" : "h-0.5"
//                   }`}
//                 ></span>
//               </span>
//             </span>
//           </button>
//           {/* <!-- Hamburger Toggle BTN --> */}
//         </div>

//         {/* Nav Menu Start   */}
//         <div
//           className={`invisible h-0 w-full items-center justify-end xl:visible xl:flex xl:h-auto xl:w-3/4 mr-4 md:mr-8 lg:mr-16 xl:mr-24 2xl:mr-40 ${
//             navigationOpen &&
//             "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5"
//           }`}
//         >
//           <nav>
//             <ul className="flex flex-col gap-3 xl:flex-row xl:items-center xl:gap-5">
//               {menuData.map((menuItem, key) => (
//                 <li key={key} className={menuItem.submenu && "group relative"}>
//                   {menuItem.submenu ? (
//                     <>
//                       <button
//                         onClick={() => setDropdownToggler(!dropdownToggler)}
//                         className="flex cursor-pointer items-center justify-between gap-3 hover:text-white"
//                       >
//                         {menuItem.title}
//                         <span>
//                           <svg
//                             className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-white"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 512 512"
//                           >
//                             <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
//                           </svg>
//                         </span>
//                       </button>

//                       <ul
//                         className={`dropdown ${dropdownToggler ? "flex" : ""}`}
//                       >
//                         {menuItem.submenu.map((item, key) => (
//                           <li key={key} className="hover:text-white">
//                             <Link href={item.path || "#"}>{item.title}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   ) : (
//                     <Link
//                       href={`${menuItem.path}`}
//                       className={
//                         pathUrl === menuItem.path
//                           ? "text-sm text-spiroDiscoBall hover:text-spiroDiscoBall focus:text-spiroDiscoBall"
//                           : "text-sm hover:text-spiroDiscoBall focus:text-spiroDiscoBall"
//                       }
//                     >
//                       {menuItem.title}
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <div className="mt-7 flex items-center gap-6 xl:mt-0"></div>
//         </div>
//       </div>
//     </header>
//   );
// };

// // w-full delay-300

// export default Header;
