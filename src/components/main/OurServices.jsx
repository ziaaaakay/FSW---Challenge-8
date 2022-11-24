import React from "react";
import imgServ from "./img/img_service.png";
import imgServChek from "./img/Group.png";
import classes from "./css/OurServices.module.css";

const OurServices = () => {
  return (
    <div className="selection" id="ourService">
      <div className="container px-lg-5">
        <div className="row">
          <div className="col-md-6 px-5">
            <div className={classes.service}>
              <img src={imgServ} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="serv-detail px-lg-4">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                Sewa mobil di BAnda Aceh bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className={classes.servComp}>
                <p>
                  <img src={imgServChek} alt="" />
                  Sewa Mobil Dengan Supir di Banda Aceh 12 Jam
                </p>
                <p>
                  <img src={imgServChek} alt="" />
                  Sewa Mobil Lepas Kunci di Banda Aceh 24 Jam
                </p>
                <p>
                  <img src={imgServChek} alt="" />
                  Sewa Mobil Jangka Panjang Bulanan
                </p>
                <p>
                  <img src={imgServChek} alt="" />
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
                <p>
                  <img src={imgServChek} alt="" />
                  Layanan Airport Transfer / Drop In Out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
