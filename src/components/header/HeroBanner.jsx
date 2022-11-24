import React from "react";
import Button from "../UI/Button";
import carImg from "./img/img_car.png";
import classes from "./css/HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <header className={classes.banner}>
      <div className="container px-lg-5 mt-2">
        <div className="row">
          <div className="col-md-6">
            <div className="banner-titles my-5">
              <h1>Sewa & Rental Mobil Terbaik di kawasan London</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <a href="/cars">
                {window.location.pathname !== "/cars" && (
                  <Button type="submit">Mulai Sewa Mobil</Button>
                )}
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className={classes.logoBanner}>
              <img src={carImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
