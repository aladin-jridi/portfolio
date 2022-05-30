import "./home.css";

import Buttons from "../button/button";


function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        {/* my img */}
        
        <img
          src="https://media-exp1.licdn.com/dms/image/D4E35AQHU9gc-sWqqlA/profile-framedphoto-shrink_400_400/0/1642494488696?e=1654005600&v=beta&t=A5biYAQhHVOUzh1KaBEfHoLTE8vl8tRbm7y9xswb0P8"
          alt=""
        />
      </div>

      <h2>
        <span>
          <strong>About Me</strong>
        </span>{" "}
        <br />
        <h5>
          I am currently looking for a job, I would like to propose my
          application for the position of Fullstack developer, Js Indeed, my
          profile corresponds to the description sought on the job offer that
          you offer on linkedin. My training in web development 'JS Full Stack
          Developer' has allowed me to acquire many skills among those you are
          looking for. I have all the assets that will allow me to succeed in
          the role that you will entrust me. Motivation, rigor and listening are
          the key words of my professional behavior. My experience as a Full
          Stack JS Developer has allowed me to acquire all the knowledge
          necessary for the proper execution of the tasks of the position to be
          filled. Regularly confronted with the hazards of the job, I am able to
          respond to unforeseen events in complete autonomy. To integrate your
          company represents for me a real stake in the future in which my work
          and my honesty will be able to express themselves fully. I remain at
          your disposal for any further information and am available to meet you
          for an interview at your convenience.
        </h5>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
