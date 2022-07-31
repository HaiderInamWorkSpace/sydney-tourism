import React from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Services />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
