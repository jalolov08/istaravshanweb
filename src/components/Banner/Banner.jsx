import React from "react";
import "./banner.css";
import { bannerData } from "../../data";
export default function Banner() {
  const card = bannerData[bannerData.length-1]
  return (
  <div>
   
        <div className="banner">
      <div className='banner_large' style={{backgroundImage:`url(${card.src})`}} >
        <p className="banner_large_title">{card.title} </p>
        <p className="banner_large_date">{card.date}</p>
      </div>
      <div className="banner_cont">
        <div className="banner_small">
        <p className="banner_small_title">
        Тантанаи идона бахшида ба рузи модар тахти унвони "Дили МОДАР"
        </p>
        <p className="banner_small_date">07.03.2023 10:00</p>
        </div>
        <div className="banner_consultation">
          <div>
          <p className="banner_cons_text">Бақайдгирии онлайн <br/> барои машварат</p>
            <button className="banner_cons_btn">Бакайд гирифтан<i class="fa-solid fa-arrow-right arr"></i></button>
          </div>
            <img src="banner_cons.png"/>
            
        </div>
      </div>
    </div>
      )
 
  <div>
  </div>
  </div>
  );
}
