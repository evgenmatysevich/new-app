import React from "react";
import "./Seting.css";


const API_KEY = "911128e937701fa5a782638ef8b411cf";



class Seting extends React.Component {
  gettingWeather = async () => {
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }
  render() {
    return (
      <div className="seting">
        <form>
          <input type="text" name="city" placeholder="Город" />
          <button >Получить погоду</button>
        </form>
      </div>
    );
  }
};
export default Seting;
