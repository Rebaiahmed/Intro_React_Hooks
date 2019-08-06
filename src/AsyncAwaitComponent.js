import { useState, useEffect } from "react";
import { getSnapshotData } from "jest-snapshot/build/utils";
export default function useFetch2(url)
{


const [data,setData] = useState([]);



//_________function get data____/:

async function getData()
{

    const response = await fetch(url);
    const data = await response.json();
    setData(data);

}


useEffect( ()=>{
    getData()
},[])


return data ;
}