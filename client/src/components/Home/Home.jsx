import React from "react";
import "../../style/home.scss";
import Posts from "./Posts/Posts";
import Suggest from "./Suggest/Suggest";
const Home = () => {
  return (
    <div className="home flex-center">
      <Posts />
      <Suggest />
    </div>
  );
};

export default Home;
