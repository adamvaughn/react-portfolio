import "./intro.css"
import selfie from "../../img/selfie.jpeg"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Adam Vaughn</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Front End</div>
                            <div className="i-title-item">Back End</div>
                            <div className="i-title-item">Full Stack</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I'm recently graduated from Vanderbilt's coding bootcamp.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={selfie} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro