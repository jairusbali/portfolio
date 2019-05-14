import React from "react";
import "./App.css";
import { NavBar, Header, About, Projects, Contact } from "./components/";

export default props => {
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <About />

      <Projects />
      <Contact />
    </React.Fragment>
  );
};
