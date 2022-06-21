// external functions
import { useState } from "react";
// external components
import { MenuIcon, XIcon } from "@heroicons/react/solid";
// custom components
import Link from "./NavigationLink";
import IconLink from "./IconLink";
import { Logo, Twitter, Discord, MagicEden } from "@/components/SVGs";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle(menuOpen: boolean) {
    // toggle menu open
    setMenuOpen(menuOpen);
    // do transition
    const el = document.getElementById("menu");
    el?.setAttribute("data-visible", menuOpen + "");
  }

  return (
    <div className="relative flex items-center justify-between z-10 pb-8">
      <Logo width={32} height={32} className="cursor-pointer z-10" />
      {menuOpen ? (
        <XIcon
          onClick={() => handleMenuToggle(false)}
          fill="white"
          className="absolute w-8 right-0 top-0 z-10 cursor-pointer md:hidden"
        />
      ) : (
        <MenuIcon
          onClick={() => handleMenuToggle(true)}
          fill="white"
          className="absolute w-8 right-0 top-0 z-10 cursor-pointer md:hidden"
        />
      )}
      <ul
        data-visible="false"
        id="menu"
        onClick={() => handleMenuToggle(false)}
        className={
          // small screen
          "flex flex-col justify-center fixed inset-0 px-10 pt-[30vh] pb-8 bg-primary bg-opacity-90 supports-blur:bg-opacity-60 backdrop-blur-xl " +
          // med and lg screen
          " md:flex-row md:relative md:p-0 md:bg-inherit md:items-center" +
          // common
          " gap-8"
        }
      >
        <Link
          onClick={() => handleMenuToggle(false)}
          num="00"
          name="HOME"
          url="/"
        />
        <Link
          onClick={() => handleMenuToggle(false)}
          num="01"
          name="ABOUT"
          url="/about"
        />
        <Link
          onClick={() => handleMenuToggle(false)}
          num="02"
          name="STUDIO"
          url="https://studio.pixelbands.io"
        />
        <Link
          onClick={() => handleMenuToggle(false)}
          num="03"
          name="LAUNCHPAD"
          url="https://sxsw.pixelbands.io"
        />
        <Link
          onClick={() => handleMenuToggle(false)}
          num="04"
          name="MARKETPLACE"
          url="https://pixelbands.holaplex.market/"
        />
        <div className="flex gap-4 mt-auto items-center md:ml-6">
          <IconLink url="https://twitter.com/PixelBandsNFT" src={Twitter} />
          <IconLink url="https://discord.gg/pixelbands" src={Discord} />
          <IconLink
            url="https://magiceden.io/creators/pixelbands"
            src={MagicEden}
          />
        </div>
      </ul>
    </div>
  );
}