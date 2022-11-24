import React from "react";
import classes from "./css/WhyUs.module.css";
import iconComplete from "./img/icon_complete.svg";
import iconPrice from "./img/icon_price.svg";
import icon24Hours from "./img/icon_24hrs.svg";
import iconProfesional from "./img/icon_professional.svg";

const whyUs = () => {
  return (
    <div className={classes.cardItem} id="whyUs">
      <div className="container px-lg-5">
        <div className={classes.text}>
          <h2>Why Us</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body my-2">
                <img src={iconComplete} alt="" className="card-logo mb-3" />
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className={classes.cardText}>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body my-2">
                <img src={iconPrice} alt="" className="card-logo mb-3" />
                <h5 className="card-title">Harga Murah</h5>
                <p className={classes.cardText}>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body my-2">
                <img src={icon24Hours} alt="" className="card-logo mb-3" />
                <h5 className="card-title">Layanan 24 Jam</h5>
                <p className={classes.cardText}>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card">
              <div className="card-body my-2">
                <img src={iconProfesional} alt="" className="card-logo mb-3" />
                <h5 className="card-title">Sopir Profesional</h5>
                <p className={classes.cardText}>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whyUs;
