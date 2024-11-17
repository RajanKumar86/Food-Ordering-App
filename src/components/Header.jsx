import { useState } from "react";
import { Header_Logo } from "../../src/utils/constants";

const Header = () => {
  const [btnName, setbtnName] = useState("Log-In");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Header_Logo} alt="Logo Img"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Log-In"
                ? setbtnName("Log-Out")
                : setbtnName("Log-In");
            }}
          >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
