import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Amazon from "../../images/amazon-snap.png";
import Netflix from "../../images/netflix.png";
import Mern from "../../images/mern.png";
import Gmail from "../../images/spacex.png";
import Pathway from "../../images/pathway.png";
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
          <a href="https://github.com/ikzath">
            <img src={Amazon} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Netflix} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mern} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gmail} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pathway} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Nasa} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
