import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {

  let links = [
    {linkName:"Impact", linkTo:"#"},
    {linkName:"Discover charities", linkTo:"#"},
    {linkName:"Donor Basics", linkTo:"#"},
    {linkName:"About us", linkTo:"#"},
]

  return (
    <div className="APP">
      <Header navLinks={links}/>

      <Home/>

      <Footer footLinks ={links}/>
    </div>
  );
}

export default App;
