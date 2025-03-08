import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import BackgroundImage from "../../components/BackgroundImage";
import bio from "../../assets/bio.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Bio = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="bio"
      className="relative h-screen flex items-center justify-center"
      onViewportEnter={() => {
        console.log("Entering section: Bio");
        setSelectedPage(SelectedPage.Bio);
      }}
      viewport={{ amount: 0.9 }}
    >
      <BackgroundImage backgroundImage={bio} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center justify-start px-24">
        <div className="max-w-sm space-y-6 text-center sm:text-left w-full">
          <p className="text-white-90 text-lg md:text-2xl leading-relaxed tracking-wide">
            Carlo Rodrigues (Krod) was born in South Africa and grew up in
            Madeira surrounded by musicians, naturally pursuing a career as a
            music producer and multi-instrumentalist.
          </p>
          <p className="text-sm font-sans sm:text-base md:text-md ">
            Krod combines provocatively dark elements of genres like alternative
            rock, hip-hop, electronic music, and dance music into a commercially
            sensitive experience.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Bio;
