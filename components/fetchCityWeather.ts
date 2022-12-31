export default async function fetchCityWeather(theCityName:String) {
    const statusp = document.querySelector("#status")
    const weather = document.querySelector(".weather")
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${theCityName},&units=metric&appid=51e69e6229683f0c12fea8d17f57063e`);
      console.log(response.status);
  
      if(!response) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      } //THE RESULTS ARE SENT TO THE CONSOLE SO DO INSPECT ELEMENTS
        const data = await response.json();
        console.log(data);
        console.log(`Jahin may be gay but the weather in ${data["name"]} is ${data["main"]["temp"]}°C`)
        statusp.innerHTML="Success!"
        
        
  
      }
    catch (error) {
      statusp.innerHTML = `gay`;
    }
  
  }