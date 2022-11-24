import React from "react";

const ButtonLogin = (props) => {
  return (
    <button type="button" className="rent btn">
      {props.children}
    </button>
  );
};

export default ButtonLogin;
