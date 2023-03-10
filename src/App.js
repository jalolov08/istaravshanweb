import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import News from "./components/News/News";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Header />
      <Banner />
      <News />
      
    </div>
  );
}

export default App;
