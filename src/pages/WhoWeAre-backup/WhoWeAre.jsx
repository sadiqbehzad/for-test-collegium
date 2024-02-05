import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";
import InnovSustain from "./InnovSustain";
import MeetOurTeam from "./MeetOurTeam";
import MissionVision from "./MissionVision";
import MyContactCard from "../../components/contactCard/MyContactCard";
import "./whoweare.css";

const WhoWeAre = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "White";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="contact-card-div">
        <MyContactCard />
      </div>
      <MissionVision />
      <InnovSustain />
      <MeetOurTeam />
    </div>
  );
};

export default WhoWeAre;
