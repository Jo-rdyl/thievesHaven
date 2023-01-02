import { useState } from 'react';

export default function App() {
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
      console.log(`Jahin may be gay but the weather in ${data["name"]} is ${data["main"]["temp"]}°C`)
      setStatus("Successful!")
      
      

    }
  catch (error) {
    setStatus("Error haha")
  }

}

return (
    <section style={{textAlign:"center",backgroundColor:"#2c2e31"}}>
      <h1>Weather Test App</h1>
      <input type="text" placeholder="Enter the city's name" id="cityName" value={city} onChange={(e) => setCity(e.target.value)}/>
      <input type="submit" onClick={() => fetchCityWeather(city)}/>
      <p id="Jordy">Written by Jordy</p>
        <p id="OpenWeather">Powered by OpenWeather™</p>
        <p>{status}</p>
        {didwork && `${Math.round(weatherData!["main"]["temp"])}°C`}

        <style jsx>{`
        #Jordy{
            font-family: Ubuntu, sans-serif;
            text-align: center;
            box-sizing: border-box;
            margin-top: 8px;
            margin-bottom: 8px;
        }
        h1,h2{color:yellow;}
        p{color:white;}
        #cityName{
          background-color:white;
          color:white;
          padding:10px 20px 0px 0px;
          border-radius:1em;
        }
        input[placeholder="Enter the city's name"]{
          text-align:center;
        }
        }`}</style>
      </section>
    
  );
}
