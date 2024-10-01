import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = ({ theme }) => {
  const history = useHistory();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams && queryParams.get("page")) {
      history.push(queryParams.get("page"));
    }
  }, []);

  return (
    <div>
      <Header theme={theme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Home;
