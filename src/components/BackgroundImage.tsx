import backgroundImage from "../assets/krod.png";

const BackgroundImage = () => {
  return (
    <img
      src={backgroundImage}
      alt="Background"
      className="h-[95vh] w-full object-cover"
    />
  );
};

export default BackgroundImage;
