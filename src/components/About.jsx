import { forwardRef } from "react";
import {
  BrowserView,
  MobileOnlyView,
  TabletView
} from "react-device-detect";

import FadeInSection from "../utils/FadeIn";

import "./About.css";
const intro = "As you have probably seen above, my name is Adelina. I am currently a final year student at Imperial College London. Over the past couple of years I have worked ";

const About = forwardRef((_, ref) => {
  return (
    <div ref={ref} className="about-main" >
      <FadeInSection>
        <div className="about-rhs">
          <div className="about-title">
            <h2 className="about-about">about</h2>
            <h1 className="about-me">me.</h1>
          </div>

          <BrowserView>
            <p className="about-text">
              {intro}
            </p>
          </BrowserView>

          <TabletView>
            <p className="about-text">
              {intro}
            </p>
          </TabletView>

          <MobileOnlyView>
            <p className="about-text-mobile">
              {intro}
            </p>
          </MobileOnlyView>
        </div>
      </FadeInSection>
    </div>
  );
});

About.displayName = "About";

export default About;