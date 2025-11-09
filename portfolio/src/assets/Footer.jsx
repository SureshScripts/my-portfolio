import React from "react";
import "../App.css";

const Footer = () => {
  return (
    
      <div className="blur " >
      
      <div className="contHead " >
      <h1 className="heading2">
        <span className="blue">Contact</span> Us
      </h1>
      </div>
     
      <div className="contact" style={{marginBottom:"20p"}} id="contact">
      <div className="contact-info" >
        <p>Call Me: +91 6301653861</p>
        <a className="email" href="mailto:suresh.koyyala89@gmail.com">
          <p>Email: suresh.koyyala89@gmail.com</p>
        </a>
      </div>
      <div className="social-icons" >
        <div className="social-icon">
          <div>
          <a href="https://github.com/SureshScripts">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
              className="social-icon-img img-thumbnail imgg " style={{borderRadius:"10px"}}
              alt="GitHub"/>
          </a>
          </div>
          
          <div>
          <a href="https://www.linkedin.com/in/koyyala-suresh/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GEJoTuzdtJVbjAGtj4f7BVUMlVH3Hr6qRA&s"
              className="social-icon-img imgg"
              alt="LinkedIn" style={{borderRadius:"10px"}}/>
          </a>

          </div>

        </div>
      </div>
    </div>
      </div>

  );
};

export default Footer;