import Language from "./Language";
import Navbar from "./Navbar";
import Hero from "./pages/Hero";
import MissionVision from "./pages/MissionVision";
// import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Language position="relative" />
      <Navbar />
      {/* <Projects /> */}
      <Hero />
      <MissionVision />
    </div>
  );
}

export default App;
