const fetcher = (...args) => fetch(...args).then(res => res.json())
import useSWR, {SWRConfig} from 'swr';
import { useState } from 'react';
const apiKey = `51e69e6229683f0c12fea8d17f57063e`

export default function App() {
const [city,setCity] = useState("");

    return(
        <>
        <h1>hello!</h1>
        <label>City: <input type="text" value={city} onChange={(e:any) => setCity(e.target.value)}/></label>
        <button onClick={getWeather}>Search</button>
        </>
    );
};

function getWeather(city:any) {
    const { data, error, isLoading } = useSWR(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, fetcher);
    if (error) {
        return alert(`There's been an error {error}`)
    }
    return alert(data[0])

}