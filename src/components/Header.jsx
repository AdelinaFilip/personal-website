import { BrowserView, MobileView } from "react-device-detect";
import "./Header.css";

function Header({ scrollToAbout, scrollToProjects }) {
  return (
    <div className="header">
      <BrowserView className="header-view">
        <p className="header-element" onClick={scrollToAbout}>About</p>
        <p className="header-element" onClick={scrollToProjects}>Projects</p>
      </BrowserView>
      <MobileView className="header-view">
        <p className="header-element-mobile" onClick={scrollToAbout}>About</p>
        <p className="header-element-mobile" onClick={scrollToProjects}>Projects</p>
      </MobileView>
    </div>
  );
}

export default Header;