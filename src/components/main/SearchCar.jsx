import React, { useState } from "react";
import classes from "./css/SearchCar.module.css";

const SearchCar = ({ filter }) => {
  const [driver, setDriver] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [cust, setCust] = useState("");

  const driverHandler = (event) => {
    if (event.target.value === "Pilih Tipe Driver") {
      return setDriver("");
    }
    setDriver(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const hoursHandler = (event) => {
    setHours(event.target.value);
  };
  const custHandler = (event) => {
    setCust(event.target.value);
  };

  const filtered = (event) => {
    event.preventDefault();
    return filter({
      driver,
      date,
      hours,
      cust,
    });
  };

  return (
    <div id="search" className={classes.card}>
      <form className="row gx-3 gy-2 mx-3 align-items-center">
        <div className="col-sm-2 m-3">
          <label htmlFor="specificSizeSelect">Tipe Driver</label>
          <select
            onChange={driverHandler}
            className="form-select"
            id="specificSizeSelect"
            value={driver}
          >
            <option>Pilih Tipe Driver</option>
            <option value={1}>Dengan Supir</option>
            <option value={2}>Tanpa Supir (Lepas Kunci)</option>
          </select>
        </div>

        <div className="col-sm-2 m-2">
          <label htmlFor="specificSizeSelect">Tanggal</label>
          <input
            onChange={dateHandler}
            type="date"
            className="form-control"
            id="inputTanggal"
            value={date}
          />
        </div>

        <div className="col-sm-2 m-2">
          <label htmlFor="specificSizeSelect">Waktu Jemput/Ambil</label>
          <input
            onChange={hoursHandler}
            type="time"
            className="form-control"
            id="inputWaktu"
            value={hours}
          />
        </div>

        <div className="col-sm-3 m-2">
          <label htmlFor="specificSizeInputGroupUsername">
            Jumlah Penumpang (Optional)
          </label>
          <div className="input-group">
            <input
              onChange={custHandler}
              type="text"
              className="form-control"
              id="inputPenumpang"
              placeholder="Jumlah Penumpang"
              value={cust}
            />
            <div className="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-sm-2">
          <div>
            <button className="rent btn" type="submit" onClick={filtered}>
              Cari Mobil
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchCar;
