import "./missionvision.css";
const MissionVision = () => {
  return (
    <div>
      <div className="mission-vision">
        <div className="main-container">
          <div className="title">
            <h2>
              <span>“</span>
              <br></br>R.Buckminster Fuller
            </h2>
          </div>
          <div className="sub-title">
            <p>
              “You never change things by fighting the existing reality. To
              change something, build a new model that makes the old model
              obsolete.”
            </p>
          </div>
          <div className="missionVision-cards">
            <div className="mission">
              <img src={""} alt="mission" />
            </div>
            <div className="vision">
              <img src={""} alt="vision" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
