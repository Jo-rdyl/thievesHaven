import useSWR, {SWRConfig} from 'swr';
import { useState } from 'react';
const fetcher = (url) => fetch(url).then(res => res.json())

export default function App() {
const [city,setCity] = useState("");

return(
        <>
        <h1>hello!</h1>
        <label>City: <input type="text" value={city} onChange={(e:any) => setCity(e.target.value)}/></label>
        <button onClick={getWeather}>Search</button>
        <getWeather/>
        </>
    );
};

function getWeather(city) {
const { data, error} = useSWR(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51e69e6229683f0c12fea8d17f57063e`, fetcher);
    if (error) {
        return <h1>{data.error}</h1>
    }
    return <h2>{data[0]}</h2>

}