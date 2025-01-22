import BackgroundImage from "./components/BackgroundImage";
import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";

function App() {
  return (
    <section id="#home" className="app relative">
      {/* Background Image */}
      <Navbar />
      <BackgroundImage />
      <Overlay text="KROD" />
    </section>
  );
}

export default App;
