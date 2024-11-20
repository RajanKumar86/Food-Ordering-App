import { useState } from "react";
import { Header_Logo } from "../../src/utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnName, setbtnName] = useState("Log-In");

  const OnlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Header_Logo} alt="Logo Img"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li> Online Status : - {OnlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>

          <li>
            <Link to="/contact"> Contact Us </Link>
          </li>

          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Log-In"
                ? setbtnName("Log-Out")
                : setbtnName("Log-In");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
