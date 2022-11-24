import React from "react";
import classes from "./css/CTABanner.module.css";
import Button from "../UI/Button";

const CTABanner = () => {
  return (
    <div className="rent-banner pt-5" id="ourService">
      <div className="container px-lg-5 mt-5">
        <div className={classes.rentBox}>
          <h1>Sewa Mobil di Banda Aceh Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="/cars">
            {window.location.pathname !== "/cars" && (
              <Button type="submit">Mulai Sewa Mobil</Button>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
