import { Show } from ".";
import VideoPlayer from "./VideoPlayer";

type Props = {
  shows: Show[];
  currentPage: number;
};

const ShowDetails = ({ shows, currentPage }: Props) => {
  const show = shows[currentPage];
  return (
    <div className="w-full max-w-4xl space-y-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        {show.title}
      </h1>
      <p className="text-lg font-medium text-center">
        {show.date} | {show.location}
      </p>
      {/* Video Player */}
      <VideoPlayer shows={shows} currentPage={currentPage} />
    </div>
  );
};

export default ShowDetails;
