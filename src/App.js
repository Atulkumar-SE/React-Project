import React from "react";
import "./App.css"
import Footer from "./Components/BasicBody/Footer";
import RegistrationForm from "./Components/Form/login";
import Navbar from "./Components/BasicBody/Navbar";
import Todo from "./Components/Todolist/Todo";
function App() {
  return (
    <div>
      <Navbar />
      <RegistrationForm /> 
      <Todo/>
     <Footer/>
    </div>
  );
}

export default App;
