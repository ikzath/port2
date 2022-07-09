import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Ikzath Kalanthar - 2022</span>
        <div className="f-icons">
          <img
            src={Github}
            alt=""
            style={{ height: "54px" }}
            onClick={() => window.open("https://github.com/ikzath", "_blank")}
          />
          <img
            src={LinkedIn}
            alt=""
            style={{ height: "54px" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/ikzath/", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
