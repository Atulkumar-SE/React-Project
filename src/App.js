import React from "react";
import Footer from "./Components/BasicBody/Footer";
import RegistrationForm from "./Components/Form/login";
import Navbar from "./Components/BasicBody/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <RegistrationForm />
     <Footer/>
    </div>
  );
}

export default App;
