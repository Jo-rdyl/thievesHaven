import fetchCityWeather from '../components/fetchCityWeather';

export default function App() {
  return (
    <section style={{textAlign:"center"}}>
      <h1>Weather Test App</h1>
      <input type="text" placeholder="enter city name" id="cityName"/>
      <input type="submit" onClick={handleClick}/>
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
const handleClick = () => {
  const GetCityName = document.querySelector("#cityName")
  const CityName = GetCityName.value;
  fetchCityWeather(CityName)

}