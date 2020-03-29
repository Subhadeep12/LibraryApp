import React from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import Courses from "./Courses";
function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/courses") return <Courses />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
