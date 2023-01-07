import { useState } from 'react';

function Weather() {
  const [weatherData,SetWeatherData] = useState(null)

  const fetchCityWeather = async (event: any) => {

    event.preventDefault();  //Stop the form from submitting and refreshing the page

    const theCityName = event.target.city.value; //gets the input value

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=\
      ${theCityName}&units=metric&appid=51e69e6229683f0c12fea8d17f57063e`);
      const data = await response.json();
      SetWeatherData(data);
      console.log(JSON.stringify(data,null,2));
    }
    catch (error) {
      console.log("Error")
    }
  }

  return (
    <>
    <section>
      <h2>Weather</h2>
      <form onSubmit={fetchCityWeather}>
        <input type="text" required placeholder="Enter the city's name" name="city" />
        <button type='submit'>Submit</button>
      </form>
      <p>Written by Jordy and Powered by OpenWeather™</p>
      <p style={{whiteSpace: "pre",}}>{weatherData ? `${JSON.stringify(weatherData,null,2)}` : ""}</p>
    </section>
    <style jsx>{`
    section {
      height: 100vh;
      text-align: center;
      color: white;
    }

    img {
      height: 100px;
      width: 100px;
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
      width: 30vw;
      margin: 0 auto;
      border-radius: 15px;
    }
    }`}
    </style>
    </>
  );
}

export default Weather;