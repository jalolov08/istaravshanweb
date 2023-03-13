import React from "react";
import "./news.css";
import { newsData } from "./../../data";

export default function News() {
  return (
    <div className="news">
      <p className="news_title">ХАБАРХО</p>
      {newsData.map((el) => {
        let { title, id, description, src, date } = el;
        return (
          <div className="news_cards_cont" key={id}>
            <div className="news_card">
              <img className="news_card_img" src={src} />
              <div className="card_texts">
                <p className="card_title">{title}</p>
                <p className="card_description">{description}</p>
                <p className="card_date">{date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
