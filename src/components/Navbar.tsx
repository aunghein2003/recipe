import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./ui/search-input";
import { DesktopMenu } from "./ui/Menu";
import HamburgerMenu from "./ui/hamburger-menu";

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 w-full h-[10vh] px-5 py-3 flex items-center justify-between box-border bg-primary">
      {/* Mobile Hamburger Menu */}
      <HamburgerMenu />

      {/* Logo */}
      <Link
        href={"/"}
        className="flex items-center text-2xl md:text-3xl xl:text-4xl font-semibold font-serif text-white"
      >
        <Image src="/logo.png" width={80} height={80} alt="logo" />
        Recipe
      </Link>

      {/* Desktop Menu */}
      <DesktopMenu />

      {/* Search Box */}
      <SearchInput />
    </nav>
  );
}
