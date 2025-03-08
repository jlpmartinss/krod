import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import Bio from "./scenes/bio";
import Music from "./scenes/music";
import Shows from "./scenes/shows";
import Photos from "./scenes/photos";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Navbar updated, isTopOfPage:", isTopOfPage);
  }, [isTopOfPage]);

  return (
    <div className="app relative">
      {/* Navbar */}
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />

      {/* Bio Section */}
      <Bio setSelectedPage={setSelectedPage} />
      {/* Music Section */}
      <Music setSelectedPage={setSelectedPage} />
      {/* Shows Section */}
      <Shows setSelectedPage={setSelectedPage} />
      {/* Photos Section */}
      <Photos setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
