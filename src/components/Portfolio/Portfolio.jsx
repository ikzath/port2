import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Amazon from "../../images/amazon-snap.png";
import Netflix from "../../images/netflix.png";
import Mern from "../../images/mern.png";
import Gmail from "../../images/spacex.png";
import Pathway from "../../images/pathway1.png";
import Nasa from "../../images/wildfire-snap.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img
            src={Amazon}
            alt=""
            onClick={() =>
              window.open("https://clone-c369a.web.app//", "_blank")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Netflix}
            alt=""
            onClick={() =>
              window.open("https://netflix-clone-4febb.web.app/", "_blank")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Mern}
            alt=""
            onClick={() =>
              window.open(
                "https://infinite-reef-45760.herokuapp.com/",
                "_blank"
              )
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Gmail}
            alt=""
            onClick={() =>
              window.open("https://i-message-clone-c739c.web.app/", "_blank")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Pathway}
            alt=""
            onClick={() =>
              window.open("https://dummy-drinks.web.app/", "_blank")
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Nasa}
            alt=""
            onClick={() =>
              window.open(
                "https://github.com/ikzath/WILDFIRE-TRACKER-NASA-API",
                "_blank"
              )
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
