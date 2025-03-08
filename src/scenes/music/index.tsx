import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Music = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="music"
      className="h-screen bg-gray-300 flex items-center justify-center"
      onViewportEnter={() => {
        console.log("Entering section: Music");
        setSelectedPage(SelectedPage.Music);
      }}
      viewport={{ amount: 0.9 }}
    >
      <h1>Music Section</h1>
    </motion.div>
  );
};

export default Music;
