type Props = {
  text: string;
};

const Overlay = ({ text }: Props) => {
  return (
    <div className="absolute top-0 left-0 h-[95vh] w-full flex items-center bg-red-400 bg-opacity-40 justify-center">
      <h1
        className=" text-black/50 font-bold uppercase animate-fade-up"
        style={{ fontSize: "30rem" }}
      >
        {text}
      </h1>
    </div>
  );
};

export default Overlay;
