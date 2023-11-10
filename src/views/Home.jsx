import Intro from "../components/Intro"
import Description from "../components/Description"
import Projects from "./Projects"
import Form from "../components/Form"

const Home= () => {
    return (
        <>
        <br />
        <Intro id="top" />
        <br />
        <Description />
        <br />
        <Projects />
        <br />
        <Form />
        <br/>
        <div className="container-arrow d-flex">
            <a href="#top" className="social-icon">
            <i className="fa-solid fa-angle-up fa-flip fa-2xl"></i>
            </a>
        </ div>
        </>
    );
}

export default Home