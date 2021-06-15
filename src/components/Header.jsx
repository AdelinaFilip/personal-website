import "./Header.css";

function Header({ scrollToAbout, scrollToProjects }) {
  return (
    <div className="header">
      <p className="header-element" onClick={scrollToAbout}>About me</p>
      <p className="header-element" onClick={scrollToProjects}>Projects</p>
    </div>
  );
}

export default Header;