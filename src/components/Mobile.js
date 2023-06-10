import React from "react";
import ubike from "../img/ubike.png";
import {  Routes,  Route,  Link,  Outlet,  useParams,  useNavigate,} from "react-router-dom";
import "./Mobile.css";
const Mobile = () => {
  let navigate = useNavigate();

  return (
    <div className="mobile">
      <div className="navbar1">
        <img src={ubike} className="d" alt="bike pic"></img>
        <div className="ham" onClick={() => {
            navigate("/mobilebar");
          }}>☰</div>
      </div>
      <div className="line"></div>
      <div className="dot1">站點資訊</div>
      <div className="ppl">
        <select className="place1">
          <option value="">搜尋站點</option>
          <option value="taipei">台北市</option>
          <option value="cat">台南市</option>
          <option value="cat">台東市</option>
        </select>
      </div>
      <div className="pp2">
        <select className="city1">
          <option value="">縣市選擇</option>
          <option value="taipei">台北市</option>
          <option value="cat">台南市</option>
          <option value="cat">台東市</option>
        </select>
      </div>
      <div className="check">
        <input type="checkbox" className="allcheck" value="" />
        <label>全部勾選</label>
      </div>
      <div className="check2">
        <div className="box1">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>中正區</label>
        </div>
        <div className="box2">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>萬華區</label>
        </div>
        <div className="box3">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>大同區</label>
        </div>
        <div className="box4">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>中山區</label>
        </div>
        <div className="box5">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>松山區</label>
        </div>
        <div className="box6">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>大安區</label>
        </div>
        <div className="box7">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>信義區</label>
        </div>
        <div className="box8">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>內湖區</label>
        </div>
        <div className="box9">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>南港區</label>
        </div>
        <div className="box10">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>士林區</label>
        </div>
        <div className="box11">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>北投區</label>
        </div>
        <div className="box12">
          <input type="checkbox" className="all" value="全部勾選" />
          <label>文山區</label>
        </div>
      </div>
      <div className="block">
        <div className="title">
          <div className="title1">縣市</div>
          <div className="title2">區域</div>
          <div className="title3">站點名稱</div>
        </div>
        <div className="con">
          <div className="con1">台北市</div>
          <div className="con1">a1</div>
          <div className="con12">a2</div>
        </div>{" "}
        <div className="con3">
          <div className="con1">台北市</div>
          <div className="con1">b1</div>
          <div className="con12">b2</div>
        </div>{" "}
        <div className="con">
          <div className="con1">台北市</div>
          <div className="con1">c1</div>
          <div className="con12">c2</div>
        </div>{" "}
        <div className="con3">
          <div className="con1">台北市</div>
          <div className="con1">d1</div>
          <div className="con12">d2</div>
        </div>{" "}
        <div className="con">
          <div className="con1">台北市</div>
          <div className="con1">e1</div>
          <div className="con12">e2</div>
        </div>{" "}
        <div className="con31">
          <div className="con1">台北市</div>
          <div className="con1">f1</div>
          <div className="con12">f2</div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
