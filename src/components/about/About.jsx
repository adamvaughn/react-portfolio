import "./about.css"
import selfie from "../../img/selfie.jpeg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={selfie} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    A text placeholder
                </p>
                <p className="a-desc">
                    More placeholder text.
                </p>
            </div>
        </div>
    )
}

export default About