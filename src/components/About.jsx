import { forwardRef } from "react";
import {
  BrowserView,
  MobileOnlyView,
  TabletView
} from "react-device-detect";

import FadeInSection from "../utils/FadeIn";

import "./About.css";

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id aliquam metus. Maecenas eget auctor tortor, at ullamcorper magna. Proin tristique mi auctor maximus elementum. Donec porttitor sem non purus egestas, in maximus nisi condimentum. Donec iaculis sagittis magna, eu cursus turpis tempor eu. Cras ultrices dapibus scelerisque. Integer et fringilla lacus, in vestibulum ipsum. Sed id risus non nunc finibus condimentum. Sed bibendum, neque quis facilisis laoreet, lacus ligula vulputate sem, non aliquam eros nulla sed neque. Aliquam erat volutpat. Vestibulum convallis sit amet nibh consectetur facilisis. Praesent risus tortor, efficitur id efficitur in, faucibus sed ante. Nunc tincidunt nunc id ligula cursus, at faucibus velit rutrum. Vestibulum metus mi, consequat in tempor nec, volutpat vel dolor. Aenean rhoncus tempor felis eu efficitur.
            </p>
          </BrowserView>

          <TabletView>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id aliquam metus. Maecenas eget auctor tortor, at ullamcorper magna. Proin tristique mi auctor maximus elementum. Donec porttitor sem non purus egestas, in maximus nisi condimentum. Donec iaculis sagittis magna, eu cursus turpis tempor eu. Cras ultrices dapibus scelerisque. Integer et fringilla lacus, in vestibulum ipsum. Sed id risus non nunc finibus condimentum. Sed bibendum, neque quis facilisis laoreet, lacus ligula vulputate sem, non aliquam eros nulla sed neque. Aliquam erat volutpat. Vestibulum convallis sit amet nibh consectetur facilisis. Praesent risus tortor, efficitur id efficitur in, faucibus sed ante. Nunc tincidunt nunc id ligula cursus, at faucibus velit rutrum. Vestibulum metus mi, consequat in tempor nec, volutpat vel dolor. Aenean rhoncus tempor felis eu efficitur.
            </p>
          </TabletView>

          <MobileOnlyView>
            <p className="about-text-mobile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id aliquam metus. Maecenas eget auctor tortor, at ullamcorper magna. Proin tristique mi auctor maximus elementum. Donec porttitor sem non purus egestas, in maximus nisi condimentum. Donec iaculis sagittis magna, eu cursus turpis tempor eu. Cras ultrices dapibus scelerisque. Integer et fringilla lacus, in vestibulum ipsum. Sed id risus non nunc finibus condimentum. Sed bibendum, neque quis facilisis laoreet, lacus ligula vulputate sem, non aliquam eros nulla sed neque. Aliquam erat volutpat. Vestibulum convallis sit amet nibh consectetur facilisis. Praesent risus tortor, efficitur id efficitur in, faucibus sed ante. Nunc tincidunt nunc id ligula cursus, at faucibus velit rutrum. Vestibulum metus mi, consequat in tempor nec, volutpat vel dolor. Aenean rhoncus tempor felis eu efficitur.
            </p>
          </MobileOnlyView>
        </div>
      </FadeInSection>
    </div>
  );
});

About.displayName = "About";

export default About;