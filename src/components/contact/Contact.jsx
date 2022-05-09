import "./contact.css"
import email from "../../img/gmail.png"
import GitHub from "../../img/GitHub-Mark-64px.png"
import LinkedIn from "../../img/In-Blue-Logo.png.original.png"
const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                    <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            adamdvaughn@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={GitHub} alt="" className="c-icon" />
                            https://github.com/adamvaughn
                        </div>
                        <div className="c-info-item">
                            <img src={LinkedIn} alt="" className="c-icon" />
                            https://www.linkedin.com/in/adam-vaughn-99584b116/
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's up?</b> Feel free to contact me, I'm always looking for work or willing to discuss development.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact