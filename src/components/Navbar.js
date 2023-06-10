import React from "react";
import {  Routes,  Route,  Link,  Outlet,  useParams,  useNavigate,} from "react-router-dom";
import ubike from "../img/ubike.png";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
        
        <img src={ubike} className="img1" alt="bike pic"></img>
        <ul>
          <li>使用說明</li>
          <li>收費方式</li>
          <li>站點資訊</li>
          <li>最新消息</li>
          <li>活動專區</li>
        </ul>
        <div className="but">
        <input type="button" value="登入" className="butt" onClick={() => {
            navigate("/Mobile");
          }}/>

        </div>

      </div>

    </div>
  );
};

export default Navbar;
