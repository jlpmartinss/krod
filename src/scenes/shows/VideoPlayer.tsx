import { Show } from ".";

type Props = {
  shows: Show[];
  currentPage: number;
};

const VideoPlayer = ({ shows, currentPage }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <iframe
        className="w-full max-w-3xl aspect-video rounded-lg shadow-lg border-0"
        src={shows[currentPage].videoUrl}
        title={`Video for ${shows[currentPage].title}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
