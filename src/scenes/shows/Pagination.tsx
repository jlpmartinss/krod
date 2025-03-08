import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

type Props = {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  totalShows: number;
};

const Pagination = ({ currentPage, setCurrentPage, totalShows }: Props) => {
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalShows - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex space-x-8 mt-8 items-center">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 0}
        className={`p-3 rounded-full ${
          currentPage === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalShows - 1}
        className={`p-3 rounded-full ${
          currentPage === totalShows - 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Pagination;
