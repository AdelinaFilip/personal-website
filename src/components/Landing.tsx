import "../App.css";
import Tilt from "react-parallax-tilt";
import {
  BrowserView,
  MobileOnlyView,
  TabletView
} from "react-device-detect";

import me from "../images/me2.jpg";

import SocialPanel from "./SocialPanel";

function Landing() {
  return (
    <div className="landing">
      <BrowserView>
        <Tilt tiltMaxAngleX={16} tiltMaxAngleY={16}>
          <div className="card">
            <div className="card-contents">
              <img className="me-img" src={me} alt="me" />
              <h1 className="title">Hi, I'm <span> &nbsp;Adelina!</span></h1>
              <hr className="divider" />
              <SocialPanel />
            </div>
          </div>
        </Tilt>
      </BrowserView>

      <TabletView>
        <div className="card">
          <div className="card-contents">
            <img className="me-img" src={me} alt="me" />
            <h1 className="title">Hi, I'm <span> &nbsp;Adelina!</span></h1>
            <hr className="divider" />
            <SocialPanel />
          </div>
        </div>
      </TabletView>
      
      <MobileOnlyView>
        <div className="card-mobile">
          <div className="card-contents">
            <img className="me-img" src={me} alt="me" />
            <h1 className="title">Hi, I'm <span> &nbsp;Adelina!</span></h1>
            <SocialPanel />
          </div>
        </div>
      </MobileOnlyView>
    </div>
  );
}

export default Landing;