import { useState } from "react";


export const TheFetch = () =>{
    const [fetchResponse, setfetchResponse] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(setfetchResponse)

    return fetchResponse
}