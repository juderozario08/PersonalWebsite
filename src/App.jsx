import Navbar from "./Components/navbar/Navbar";
import "./app.scss";

const App = () => {
    return (
        <div>
            <section><Navbar /></section>
            <section>
                <a href="">Parallax</a>
            </section>
            <section>
                <a href="">Education</a>
            </section>
            <section>
                <a href="">Portfolio 1</a>
            </section>
            <section>
                <a href="">Portfolio 2</a>
            </section>
            <section>
                <a href="">Portfolio 3</a>
            </section>
            <section>
                <a href="">Contact</a>
            </section>
        </div>
    );
};

export default App;
