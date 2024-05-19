import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="">Jude Rozario</a>
                </motion.span>
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
