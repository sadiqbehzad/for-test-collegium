import Navbar from "./Navbar";
import Hero from "./pages/WhoWeAre/Hero";
import InnovSustain from "./pages/WhoWeAre/InnovSustain";
import MissionVision from "./pages/WhoWeAre/MissionVision";
// import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MissionVision />
      <InnovSustain />
    </div>
  );
}

export default App;
