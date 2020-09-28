import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Seting from "./components/Seting/Seting";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/seting" component={Seting} />
      </div>
    </BrowserRouter>
  );
};

export default App;
