import React from "react";
// import Navbar from "./components/Navbar";
// import Container from "./components/Container";
// import Sponsors from "./components/Sponsors";
// import FooterComponent from "./components/FooterComponent";
import Navbaragain from "./components/Navbaragain";

const HomePage = ({ user, setUser }) => {
  return (
    <div>
      {/* <Navbar user={user} setUser={setUser} /> */}
      <Navbaragain />
      {/* <Container />
      <Sponsors />
      <FooterComponent /> */}
    </div>
  );
};

export default HomePage;
