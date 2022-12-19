import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
      <Footer footLinks ={links}/>
    </div>
  );
}

export default App;
