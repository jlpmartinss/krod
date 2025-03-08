import { useState } from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import ShowDetails from "./ShowDetails";
import Pagination from "./Pagination";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type Show = {
  title: string;
  date: string;
  location: string;
  videoUrl: string;
};

const Shows = ({ setSelectedPage }: Props) => {
  const shows: Show[] = [
    {
      title: "Krod | Art Camacha",
      date: "TUE, 31 DEC 2025",
      location: "Camacha",
      videoUrl: "https://www.youtube.com/embed/PNcs2maQAJU",
    },
    {
      title: "Krod | Festa da Cerveja",
      date: "FRI, 5 JAN 2026",
      location: "LISBON",
      videoUrl: "https://www.youtube.com/embed/OPGJ9wlOqiI",
    },
    {
      title: "Krod | Dia Nacional do Motociclista",
      date: "SAT, 15 JAN 2026",
      location: "Machico",
      videoUrl: "https://www.youtube.com/embed/0rjtdR2T5rw",
    },
    {
      title: "Krod | Enseada Festival",
      date: "SAT, 15 JAN 2026",
      location: "Jardim Municipal, Funchal",
      videoUrl: "https://www.youtube.com/embed/k2psktvCjDk",
    },
    {
      title: "Krod | Enseada Festival",
      date: "SAT, 15 JAN 2026",
      location: "Jardim Municipal, Funchal",
      videoUrl: "https://www.youtube.com/embed/NqVyyCQxsoc",
    },
    {
      title: "Krod | Santana North Festival",
      date: "SAT, 15 JAN 2026",
      location: "Santana",
      videoUrl: "https://www.youtube.com/embed/Lc5BgC47b6I",
    },
    {
      title: "Krod | Madeira Art Fest",
      date: "SAT, 15 JAN 2026",
      location: "Quinta Magnólia, Barreiros",
      videoUrl: "https://www.youtube.com/embed/CBWseQXlc4o",
    },
    {
      title: "Krod | Concertos L",
      date: "SAT, 15 JAN 2026",
      location: "Estalagem Ponta do Sol",
      videoUrl: "https://www.youtube.com/embed/cs0klLj2rAQ",
    },
    {
      title: "Krod | Feira Do Livro",
      date: "SAT, 15 JAN 2026",
      location: "Placa Central, Funchal",
      videoUrl: "https://www.youtube.com/embed/_nZVdo8rZg4",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section id="shows" className="relative mx-auto h-screen w-5/6 py-20 pt-24">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Shows);
        }}
        viewport={{ amount: 0.9 }}
      >
        <div className="flex flex-col items-center h-full">
          <ShowDetails shows={shows} currentPage={currentPage} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalShows={shows.length}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Shows;
