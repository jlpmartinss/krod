import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Photos = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="photos"
      className="h-screen bg-gray-500 flex items-center justify-center"
      onViewportEnter={() => {
        console.log("Entering section: Photos");
        setSelectedPage(SelectedPage.Photos);
      }}
      viewport={{ amount: 0.9 }}
    >
      <h1>Photos Section</h1>
    </motion.div>
  );
};

export default Photos;
