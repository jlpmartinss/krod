import { SelectedPage } from "../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`px-4 h-full flex items-center justify-center text-sm font-extrabold uppercase tracking-wider cursor-pointer transition-colors duration-300
    ${
      selectedPage === lowerCasePage ? "text-white bg-custom" : "text-white-70"
    } 
    hover:text-white hover:bg-custom`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
