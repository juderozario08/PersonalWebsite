import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>
          <a href="">Jude Rozario</a>
        </span>
        <div className="social">
          <a
            href="https://github.com/juderozario08/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/public/github.svg" alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/jude-a-rozario"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.svg" alt="Linked In" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
