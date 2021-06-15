import "./About.css";
import me from "../images/me2.jpg";

function About() {
  return (
    <div className="about-main">
      <img className="me-img" src={me} alt="me" />
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id aliquam metus. Maecenas eget auctor tortor, at ullamcorper magna. Proin tristique mi auctor maximus elementum. Donec porttitor sem non purus egestas, in maximus nisi condimentum. Donec iaculis sagittis magna, eu cursus turpis tempor eu. Cras ultrices dapibus scelerisque. Integer et fringilla lacus, in vestibulum ipsum. Sed id risus non nunc finibus condimentum. Sed bibendum, neque quis facilisis laoreet, lacus ligula vulputate sem, non aliquam eros nulla sed neque. Aliquam erat volutpat. Vestibulum convallis sit amet nibh consectetur facilisis. Praesent risus tortor, efficitur id efficitur in, faucibus sed ante. Nunc tincidunt nunc id ligula cursus, at faucibus velit rutrum. Vestibulum metus mi, consequat in tempor nec, volutpat vel dolor. Aenean rhoncus tempor felis eu efficitur.
      </p>
    </div>
  );
}

export default About;