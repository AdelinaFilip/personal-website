import {
  forwardRef,
  useEffect,
  useState
} from "react";

import "./About.css";

const About = forwardRef((_, ref) => {
  const [ isVisible, setVisible ] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(ref.current);
    return () => observer.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`about-main ${isVisible ? "is-visible" : ""}`}
    >
      <div className="about-rhs">
        <div className="about-title">
          <h2 className="about-about">about</h2>
          <h1 className="about-me">me.</h1>
        </div>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id aliquam metus. Maecenas eget auctor tortor, at ullamcorper magna. Proin tristique mi auctor maximus elementum. Donec porttitor sem non purus egestas, in maximus nisi condimentum. Donec iaculis sagittis magna, eu cursus turpis tempor eu. Cras ultrices dapibus scelerisque. Integer et fringilla lacus, in vestibulum ipsum. Sed id risus non nunc finibus condimentum. Sed bibendum, neque quis facilisis laoreet, lacus ligula vulputate sem, non aliquam eros nulla sed neque. Aliquam erat volutpat. Vestibulum convallis sit amet nibh consectetur facilisis. Praesent risus tortor, efficitur id efficitur in, faucibus sed ante. Nunc tincidunt nunc id ligula cursus, at faucibus velit rutrum. Vestibulum metus mi, consequat in tempor nec, volutpat vel dolor. Aenean rhoncus tempor felis eu efficitur.
        </p>
      </div>
    </div>
  );
});

export default About;