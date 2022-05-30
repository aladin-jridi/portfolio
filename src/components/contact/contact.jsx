import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineGoogle} from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/aladin-jridi-664971152/"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
          Linkedin  <span>aladin jridi</span>
          </h2>
        </a>

        <a
          href="#"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+216 50 915 806</span>
          </h2>
        </a>

        <a href="https://github.com/aladin-jridi" className="contact instagram">
          <AiOutlineGithub className="icon" />
          <h2>
          Github <span>aladin-jridi</span>
          </h2>
        </a>
        <a href="https://github.com/aladin-jridi" className="contact instagram">
          <AiOutlineGoogle className="icon" />
          <h2>
          Google <span>aladinjridi007@gmail.com</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
