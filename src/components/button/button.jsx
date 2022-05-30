import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="../props/MY-CV-ENG.pdf"  download className="btn pri">
      download CV
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>
      
    </div>
  );
}

export default Buttons;
