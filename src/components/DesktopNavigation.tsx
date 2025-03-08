import { SelectedPage } from "../shared/types";
import Link from "./Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const DesktopNavigation = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className="flex justify-center items-center h-16">
      {Object.keys(SelectedPage).map((key) => (
        <Link
          key={key}
          page={key as keyof typeof SelectedPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </div>
  );
};

export default DesktopNavigation;
