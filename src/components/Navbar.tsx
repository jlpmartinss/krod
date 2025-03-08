import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { SelectedPage } from "../shared/types";
import DesktopNavigation from "./DesktopNavigation";
import { Bars3Icon } from "@heroicons/react/16/solid";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const navbarBackground = isTopOfPage ? "" : "bg-black-100 bg-opacity-80"; // Dynamically set class
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div
        className={`fixed top-0 left-0 w-full z-50 ${navbarBackground} transition-colors duration-300`}
      >
        <div className="mx-auto w-5/6 flex justify-center items-center h-16">
          {isAboveMediumScreens ? (
            <DesktopNavigation
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
