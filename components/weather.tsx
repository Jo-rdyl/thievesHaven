import { useState } from 'react';
import IconSearch from '../public/icons/search.svg';
import Image from 'next/image';

function Weather() {
  const [weatherData,SetWeatherData] = useState(null)
  const [city,setCity] = useState<string>("")
  const [searchData,setSearchData] = useState<any>(null)
  const fetchCityWeather = async (event: any) => {

    event.preventDefault();  //Stop the form from submitting and refreshing the page

    const theCityName = event.target.city.value;//gets the input value

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=\
      ${theCityName}&units=metric&appid=51e69e6229683f0c12fea8d17f57063e`);//the url to fetch the weather information
      const data = await response.json();//turns the JSON into a ECMAScript object (fancy way of saying JS)
      SetWeatherData(data);//Sets the  weatherDta state from null to our new JS object!
      console.log(JSON.stringify(data,null,2));//Garbage shit that I'll remove
    }
    catch (error) {
      console.log("Error")//if it fails to get the weather data e.g. bad spelling, an error is written to the logs
    }
  }

  let SearchBar = async (e:any) =>{
    setCity(e.target.value);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'fe21157b25msh5ee270bee489cfap15338fjsna0ebab076bd8',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      } // above are the GeoDB configurations, so it actually works (yes it's necessary)
    };
    try {
      let response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?&offset=2&namePrefix=${city}`,options);
      const data = await response.json();//turns the city names into JS objects
      const actualData = data.data;//this helps with mapping the cities later on
      console.log(data)
      console.log(data["data"]["name"])
      console.log(actualData[1])
      setSearchData(actualData)
    }
    catch(error){
      console.log("error")
    }
  }
  
  return (
    <>
    <section>
      <h2>Weather</h2>
      <form onSubmit={fetchCityWeather}>
      <input type="text" required placeholder="Enter the city's name" name="city" value={city} onChange={SearchBar}/>
      <button type='submit'><Image src={IconSearch} height={40} width={40} alt="submit" /></button>
      </form>
      <div className="dropDown">
        <ul className="dropDown">
          {searchData!= null && //If the user enters in something, GeoDB shows city results
          searchData.map((item:any)=>
          <li key = {item.name} onClick={() => setCity(item.name)} className="dropDown" style=
              {{color:"#24305E",
            marginTop: "5px",
            marginBottom:"5px",
            listStyleType:"none",
          }}>
            {item.name}, {item.countryCode}</li>)}
        </ul>
      </div>
      <p>Written by Jordy and Powered by OpenWeather???</p>
      <p style={{whiteSpace: "pre",}}>{weatherData ? `${JSON.stringify(weatherData,null,2)}` : ""}</p>
    </section>
    <style jsx>{`
    section {
      height: 100vh;
      text-align: center;
      color: white;
    }

    h2 {
      font-size: 5vw;
      margin-bottom: 12vh;
    }

    p {
      margin-top: 3vh;
      font-size: 1.5rem;
    }

    form {
      background-color: #DAFFFF;
      height: 50px;
      width: 30vw;
      margin: 0 auto;
      border-radius: 25px;
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
    }

    form > * {
      background-color: transparent;
      border: none;
      border-radius: 20px;
    }

    form:focus-within {
      outline: 2px solid #24305E;
    }

    button[type="submit"] {
      width: 40px;
      padding: 0;
    }

    button[type="submit"]:hover {
      cursor: pointer;
    }

    button[type="submit"] > img {
      border-radius: 20px;
    }

    input[name="city"] {
      font-weight: 300;
      font-size: 15px;
      color: #24305E;
      width: calc(100% - 40px)
    }

    input[name="city"]:focus {
      outline: none;
    }
    `}
    </style>
    </>
  );
}

export default Weather;