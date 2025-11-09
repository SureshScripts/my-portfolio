import React from "react";
import "../App.css";
import 'animate.css';

const MainSection = () => {
  return (
    <div className="main-container blur mt-5" style={{marginTop:"20px"}}>
      
      <div className="home" id="home">
        <div className="home-left animate__animated animate__rollIn">
          <h1 className="name" id="hi">Hi</h1>
          <h1 className="name " id="about-me">
            I'm <b><span className="blue " style={{fontSize:"50px " }}>Suresh</span></b> Koyyala
          </h1>
          <p className="para">
            I am an aspiring Front-End / MERN Stack Developer with proficiency in HTML, CSS, JavaScript, React.js, and Node.js. I am seeking an opportunity to develop user-friendly, responsive, and dynamic web applications. Passionate about creating engaging interfaces and enhancing user experience through modern front-end technologies, I aim to contribute to innovative projects that combine functionality with elegant design.
          </p>
        </div>
        <div className="home-right home-left animate__animated animate__rollIn">
          <img
            className="home-img"
            src="https://res.cloudinary.com/ddu2xhktf/image/upload/v1761907605/port1-removebg-preview-removebg-preview_1_mdrc2n.png"
            alt="my logo"
            height="500px"
            width="500px"
            style={{borderRadius:"50%"}}
          />
        </div>
      </div>

     
      <div className="services" id="services">
        <h1 className="">
          <span className="blue">Services We</span> Offered
        </h1>
        <div className="services-sub-count">
          <div className="services-card home-left animate__animated animate__rollIn animate__delay-2s">
            <h1 className="sc-h1">Front-End</h1>
            <p className="sc-p">
              I have a strong interest in front-end development and enjoy creating responsive, user-friendly web pages using HTML, CSS, JavaScript, and React.js. I focus on building clean designs, smooth navigation, and interactive interfaces that improve the overall user experience.
            </p>
          </div>

          <div className="services-card home-left animate__animated animate__rollIn animate__delay-2s">
            <h1 className="sc-h1">Back-End</h1>
            <p className="sc-p">
              On the back end, I have knowledge of Node.js, Express.js, and MongoDB. I can create RESTful APIs, manage databases, and connect the front-end with the server to build complete and dynamic web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;