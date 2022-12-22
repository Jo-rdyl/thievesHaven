import { useState } from 'react';

export default function App() {
const [city,setCity] = useState("");

return(
        <>
        <h1>hello!</h1>
        <label>City: <input type="text" value={city} onChange={(e:any) => setCity(e.target.value)}/></label>
        <button>Search</button>
        </>
    );
};

