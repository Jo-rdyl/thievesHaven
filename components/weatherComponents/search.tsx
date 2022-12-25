import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

export default function Search() {

const [search,setSearch] = useState("");

const handleOnChange = (searchData:any) => {
    setSearch(searchData);
}

return (
        <>
        <h1>hello!</h1>
        </>
    )
}
