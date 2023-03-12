import React from "react";
import "./App.css"
import Footer from "./Components/BasicBody/Footer";
import RegistrationForm from "./Components/Form/login";
import Navbar from "./Components/BasicBody/Navbar";
import Todo from "./Components/Todolist/Todo";
import WeatherApi from "./Components/WeatherApp/WeatherApi";
function App() {
  return (
    <div>
      <Navbar />
      <RegistrationForm /> 
      <Todo/>
      <WeatherApi/>
     <Footer/>
    </div>
  );
}

export default App;
