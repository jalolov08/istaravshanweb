import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import News from "./components/News/News";
import Main from "./Main";
import { Link } from 'react-router-dom';
export default function () {
  return (
    <div>
      <Header />
      <Banner />
      <News />
    </div>
  );
}
