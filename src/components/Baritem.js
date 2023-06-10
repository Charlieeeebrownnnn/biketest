import React from 'react'
import ubike from "../img/ubike.png";
import "./Baritem.css";
const Baritem = () => {
  return (
    <div className='Baritem'>
 <div className="navbar1">
        <img src={ubike} className="d" alt="bike pic"></img>
        <div className="ham">✕</div>
      </div>
      <div className='bk'>
        <div className='bo'>使用方法</div>
        <div className='bo'>收費方式</div>
        <div className='bo'>站點資訊</div>
        <div className='bo'>最新消息</div>
        <div className='bo'>活動專區</div>


      </div>

        <div className='pos'>
                <div className='abo'>
                    <input  className='jj' text="button" value="登入"/>
                </div>



        </div>



    </div>
  )
}

export default Baritem