import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import BackgroundImage from "../../components/BackgroundImage";
import Overlay from "../../components/Overlay";
import backgroundImage from "../../assets/krod.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="home"
      className="relative m-0 p-0 overflow-hidden"
      onViewportEnter={() => {
        console.log("Entering section: Home");
        setSelectedPage(SelectedPage.Home);
      }}
      viewport={{ amount: 0.9 }}
    >
      <BackgroundImage backgroundImage={backgroundImage} />
      <Overlay text="KROD" />
    </motion.div>
  );
};

export default Home;
