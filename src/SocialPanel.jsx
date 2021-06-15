import "./App.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function SocialPanel() {
  return (
    <div className="socials">
      <Mailto email="adelinaf21@gmail.com" subject="Hello!">
        <GrMail />
      </Mailto>
      <GoTo link="https://www.linkedin.com/in/ioana-adelina-filip-2b96a0147/">
        <FaLinkedinIn />
      </GoTo>
      <GoTo link="https://github.com/AdelinaFilip">
        <FaGithub />
      </GoTo>
    </div>
  );
}

function Mailto({
  email, subject, body, children
}) {
  return (
    <a href={
      `mailto:${email}?subject=${encodeURIComponent(subject) || ""}&body=${encodeURIComponent(body) || ""}`
    } className="link">
      {children}
    </a>
  );
}

function GoTo({ link, children }) {
  return (
    <a href={`${link}`} className="link" target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default SocialPanel;