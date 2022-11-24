import React from "react";
import OwlCarousel from "react-owl-carousel";
import classes from "./css/Testimonial.module.css";
import img1 from "./img/img_photo1.png";
import img2 from "./img/img_photo2.png";
import imgRate from "./img/Rate.svg";
import leftButton from "./img/left_button.svg";
import rightButton from "./img/right_button.svg";

const Testimonial = () => {
  return (
    <>
      <div className="card-item pt-5" id="testimonial">
        <div className="container px-lg-5 mt-5">
          <div className={classes.textCarou}>
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
        </div>
      </div>
      <OwlCarousel
        className="owl-theme"
        loop
        autoWidth
        center
        nav
        navText={[`<img src=${leftButton}>`, `<img src=${rightButton}>`]}
        dots={false}
        responsiveClass
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 2,
          },
        }}
      >
        <div className={classes.item}>
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className={classes.profile}>
                  <div className={classes.imgArea}>
                    <img src={img1} alt="Jhon" />
                  </div>
                </div>
              </div>
              <div className="col-md-10">
                <div className={classes.content}>
                  <div className={classes.rate}>
                    <img src={imgRate} alt="" />
                  </div>
                  <div className={classes.testiText}>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h6>John Dee 32, Bromo</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.item}>
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className={classes.profile}>
                  <div className={classes.imgArea}>
                    <img src={img2} alt="Jhon" />
                  </div>
                </div>
              </div>
              <div className="col-md-10">
                <div className={classes.content}>
                  <div className={classes.rate}>
                    <img src={imgRate} alt="" />
                  </div>
                  <div className={classes.testiText}>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h6>John Dee 32, Bromo</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.item}>
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className={classes.profile}>
                  <div className={classes.imgArea}>
                    <img src={img1} alt="Jhon" />
                  </div>
                </div>
              </div>
              <div className="col-md-10">
                <div className={classes.content}>
                  <div className={classes.rate}>
                    <img src={imgRate} alt="" />
                  </div>
                  <div className={classes.testiText}>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h6>John Dee 32, Bromo</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
};

export default Testimonial;
