type Props = {
  backgroundImage: string;
};

const BackgroundImage = ({ backgroundImage }: Props) => {
  return (
    <img
      src={backgroundImage}
      alt="Background"
      className="h-[95vh] w-full object-cover"
    />
  );
};

export default BackgroundImage;
