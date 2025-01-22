const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="mx-auto w-5/6 flex justify-center items-center h-16 bg-transparent">
        {["Home", "Bio", "Music", "Shows", "Photos", "Contact", "Store"].map(
          (tab, index) => (
            <div
              key={index}
              className="px-4 h-full flex items-center justify-center text-sm font-extrabold text-custom uppercase tracking-wider cursor-pointer hover:bg-custom hover:text-white transition-colors duration-300"
            >
              {tab}
            </div>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
