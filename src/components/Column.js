import React, { useEffect } from "react";
import "./Column.css";
import { useState } from "react";

const Column = () => {
  var dit = [{ sarea: "", sna: "", sbi: "", bemp: "" },{ sarea: "", sna: "", sbi: "", bemp: "" },{ sarea: "", sna: "", sbi: "", bemp: "" },{ sarea: "", sna: "", sbi: "", bemp: "" },{ sarea: "", sna: "", sbi: "", bemp: "" },{ sarea: "", sna: "", sbi: "", bemp: "" }]
  const [ditty, setDitty] = useState(dit);
  const [cck,setCck]=useState(true);
  const [put,setPut]=useState();
  

  const api =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
  const getData = async () =>
    await fetch(api)
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        console.log(data);
        console.log(data[0].tot);
        setDitty(data);
      });
  /* const getData = () => {
   fetch(api)
      .then(res=> res.json())
      .then(data => console.log(data)
      console.log(data[0].tot)
      )
      .catch((err) => console.error("Error: ", err));
  };

getData(); */
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="column">
      <div>
        <div className="link-top"></div>
        <div className="dot">站點資訊</div>
        <div className="list">
          <input
            className="city"
            type="text"
            id="input0"
            placeholder="縣市選擇"
            list="options0"
            onChange={(e)=>{setPut(e.target.value)}}
          />

          <datalist id="options0" className="opt" >
            <option value="台北市">台北市</option>
            <option value="台南市">台南市</option>
            <option value="台東市">台東市</option>
          </datalist>
          <input
            className="place"
            type="text"
            id="input1"
            placeholder="搜尋站點"
            list="options1"
          />
          <datalist id="options1" className="opt1">
            <option value="台北市">台北市</option>
            <option value="台南市">台南市</option>
            <option value="台東市">台東市</option>
          </datalist>
        </div>
        
        <div className="boxall">
          <input type="checkbox" className="all" value="全部勾選" checked={cck}
          onChange={(e)=>{setCck(e.target.checked)}}/>
          <label>全部勾選</label>
        </div>

        {put=="台北市" ? 
       
        <div className="area">
          <div className="box1" >
            <input  type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>中正區</label>
          </div>

          <div className="box2">
            <input type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>萬華區</label>
          </div>

          <div className="box3">
            <input type="checkbox" className="all" value="全部勾選"  checked={cck}/>
            <label>大同區</label>
          </div>
          <div className="box4">
            <input type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>中山區</label>
          </div>
          <div className="box5">
            <input type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>松山區</label>
          </div>
          <div className="box6">
            <input type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>大安區</label>
          </div>
          <div className="box7">
            <input type="checkbox" className="all" value="全部勾選" checked={cck} />
            <label>信義區</label>
          </div>
          <div className="box8">
            <input type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>內湖區</label>
          </div>
          <div className="box9">
            <input type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>南港區</label>
          </div>
          <div className="box10">
            <input type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>士林區</label>
          </div>
          <div className="box11">
            <input type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>北投區</label>
          </div>
          <div className="box12">
            <input type="checkbox" className="all" value="全部勾選" checked={cck}/>
            <label>文山區</label>
          </div>
        </div>
:<div className="area1"></div>}



       

        <div className="ex">
          <div className="ex0">
            <div className="form8">縣市</div>
            <div className="form8">區域</div>
            <div className="form8 mi">站點名稱</div>
            <div className="form8">可借車輛</div>
            <div className="form8">可還空位</div>
          </div>
          <div className="ex1">
            <div className="form9">台北市</div>
            <div className="form9">{ditty[0].sarea}</div>
            <div className="form9 mi">{ditty[0].sna}</div>
            <div className="form9">{ditty[0].sbi}</div>
            <div className="form9">{ditty[0].bemp}</div>
          </div>
          <div className="ex1 co">
            <div className="form9">台北市</div>
            <div className="form9">{ditty[1].sarea}</div>
            <div className="form9 mi">{ditty[1].sna}</div>
            <div className="form9">{ditty[1].sbi}</div>
            <div className="form9">{ditty[1].bemp}</div>
          </div>
          <div className="ex1">
            <div className="form9">台北市</div>
            <div className="form9">{ditty[2].sarea}</div>
            <div className="form9 mi">{ditty[2].sna}</div>
            <div className="form9">{ditty[2].sbi}</div>
            <div className="form9">{ditty[2].bemp}</div>
          </div>
          <div className="ex1 co">
            <div className="form9">台北市</div>
            <div className="form9">{ditty[3].sarea}</div>
            <div className="form9 mi">{ditty[3].sna}</div>
            <div className="form9">{ditty[3].sbi}</div>
            <div className="form9">{ditty[3].bemp}</div>
          </div>
          <div className="ex1">
            <div className="form9">台北市</div>
            <div className="form9">{ditty[4].sarea}</div>
            <div className="form9 mi">{ditty[4].sna}</div>
            <div className="form9">{ditty[4].sbi}</div>
            <div className="form9">{ditty[4].bemp}</div>
          </div>
          <div className="ex1 co la">
            <div className="form9">台北市</div>
            <div className="form9">{ditty[5].sarea}</div>
            <div className="form9 mi">{ditty[5].sna}</div>
            <div className="form9">{ditty[5].sbi}</div>
            <div className="form9">{ditty[5].bemp}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Column;
