import { useState } from 'react';

function Weather() {
  const [city,setCity] = useState("")
  const [inputCityText,setInputCityText] = useState("")
  const [weatherData,SetWeatherData] = useState(null)
  const [status,setStatus] = useState("")
  const [didwork,setdidwork] = useState(false)

  async function fetchCityWeather(theCityName:String) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${theCityName}&units=metric&appid=51e69e6229683f0c12fea8d17f57063e`);
      console.log(response.status);

      if(!response) {
        throw new Error(`HTTP ERROR: ${response["status"]}`);
      } //THE RESULTS ARE SENT TO THE CONSOLE SO DO INSPECT ELEMENTS
        const data = await response.json();
        setdidwork(true)
        console.log(data);
        SetWeatherData(data);
        console.log(`Jordy may be gay but the weather in ${data["name"]} is ${data["main"]["temp"]}°C`)
        setStatus("Successful!")
        
        

      }
    catch (error) {
      setStatus("Error haha")
    }

  }

  return (
    <>
    <section className="section">
      <h2>Weather Test App</h2>
      <input type="text" placeholder="Enter the city's name" id="cityName" value={city} onChange={(e) => setCity(e.target.value)}/>
      <input type="submit" onClick={() => fetchCityWeather(city)}/>
      <p>Written by Jordy</p>
      <p>Powered by OpenWeather™</p>
      <p>{status ? status : 'waiting on status...'}</p>
      {didwork && `${Math.round(weatherData!["main"]["temp"])}°C`}
    </section>
    <style jsx>{`
    .section {
      text-align: center;
      color: white;
    }

    .section > h2 {
      font-size: 5vw;
    }

    .section > p {
      font-size: 1.5rem;
    }

    .section > input[type="text"] {
      border: none;
      border-radius: 15px;
      text-align: center;
    }

    .section > input[type="submit"] {
      background-color: #A8D0E6;
      border: none;
      border-radius: 15px;
    }
    }`}
    </style>
    </>
  );
}

export default Weather;