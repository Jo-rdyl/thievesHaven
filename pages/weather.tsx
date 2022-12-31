import fetchCityWeather from '../components/fetchCityWeather';
import { useState } from 'react';

export default function App() {
    const [city,setCity] = useState("")
  return (
    <section style={{textAlign:"center"}}>
      <h1>Weather Test App</h1>
      <input type="text" placeholder="enter city name" id="cityName" value={city} onChange={(e) => setCity(e.target.value)}/>
      <input type="submit" onClick={() => fetchCityWeather(city)}/>
      <p id="Jordy">Written by Jordy</p>
        <p id="OpenWeather">Powered by OpenWeather™</p>
        <p id="status"></p>
        <style jsx>{`
        #Jordy{
            font-family: Ubuntu, sans-serif;
            text-align: center;
            box-sizing: border-box;
            margin-top: 8px;
            margin-bottom: 8px;
        }`}</style>
      </section>
      
  );
}
