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
                    Hey! I'm Adam Vaughn, I'm fresh out of a coding bootcamp and looking to make a name for myself. I come from a background in pharmacy as a CPhT of 12 years!
                </p>
                <p className="a-desc">
                    I've been working with the MERN stack and have experience with HTML, CSS, JavaScript, React, and of course Git!
                </p>
            </div>
        </div>
    )
}

export default About