import { useMobileMenu } from "@lib/context/mobile-menu-context";
import Hamburger from "@modules/common/components/hamburger";
import CartDropdown from "@modules/layout/components/cart-dropdown";
import DropdownMenu from "@modules/layout/components/dropdown-menu";
import MobileMenu from "@modules/mobile-menu/templates";
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

const Nav = () => {
  const { pathname } = useRouter();
  const [isHome, setIsHome] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", detectScrollY);

      return () => {
        window.removeEventListener("scroll", detectScrollY);
      };
    }
  }, [isHome]);

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false);
  }, [pathname]);

  const { toggle } = useMobileMenu();

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "!bg-white text-gray-900 relative h-16 px-1 md:px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200  ",
          {
            " !border-gray-200 drop-shadow-lg": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-regular",
            {
              "text-gray-900 group-hover:text-gray-900": isHome && !isScrolled,
            }
          )}
        >
          <div className="flex items-center flex-1 h-full basis-0">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="h-full small:block">
              <Link href="/">
                <Image src="/shoppibye.svg" height={60} width={100} alt="Shop logo" />
              </Link>
            </div>
          </div>

          <div className="flex items-center h-full cursor-pointer lg:flex-start">
            <DropdownMenu />
          </div>

          <div className="flex items-center justify-end flex-1 h-full gap-x-6 basis-0">
            <div className="items-center hidden h-full small:flex gap-x-4">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">Account</Link>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  );
};

export default Nav;
