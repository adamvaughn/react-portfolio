import "./contact.css";
import gmail from "../../img/gmail.png";
import GitHub from "../../img/GitHub-Mark-64px.png";
import LinkedIn from "../../img/In-Blue-Logo.png.original.png";
import Resume from "../../img/resumeicon.png";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
     const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_ld0l67v",
          "template_2kleodq",
          formRef.current,
          "cgiJv_PdD-Bj962zd"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                    <div className="c-info-item">
                            <img src={gmail} alt="" className="c-icon" />
                            <a href="mailto:adamdvaughn@gmail.com">Email</a>
                        </div>
                        <div className="c-info-item">
                            <img src={GitHub} alt="" className="c-icon" />
                            <a href="https://github.com/adamvaughn" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                        <div className="c-info-item">
                            <img src={LinkedIn} alt="" className="c-icon" />
                            <a href="https://www.linkedin.com/in/adam-vaughn-99584b116/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                        {/* <div className="c-info-item">
                            <img src={Resume} alt="" className="c-icon" />
                            <a href="https://docs.google.com/document/d/1zXU1uvqMSTAsq_W8mRIQr2lLPaB5Jk1FmbADPV2Hd2c/edit?usp=sharing" target="_blank" rel="noreferrer">Résumé</a>
                        </div> */}
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's up?</b> Feel free to contact me, I'm always looking for work or willing to discuss development.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact