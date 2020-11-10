import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import Pokemon from "./components/Pokemon/Pokemon";
import Music from "./components/Music/Music";
import Weather_app from "./components/Weather_app/Weather_app";





const App = (props) => {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
       
        <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
        <Route path="/profile" render={() => <Profile posts={props.posts} />}/>
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/music" component={Music} />
        <Route path="/weather_app" component={Weather_app} />
      </div>
    </BrowserRouter>
   
  );
};



export default App;
