import React from "react";
import Sidebar from "layout/Sidebar";
import Header from "layout/Header";
import Footer from "components/Footer";
import Main from "components/Main";

function Home() {
  return (
    <div className="grid-wrapper">
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
