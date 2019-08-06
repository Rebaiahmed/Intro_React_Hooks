import React from "react";
import useFetch from './useFetch';
import useFetch2 from './AsyncAwaitComponent';


export default function DataLoader2()

{

    //const data = useFetch("https://jsonplaceholder.typicode.com/todos");
    const data = useFetch2("https://jsonplaceholder.typicode.com/todos");


    return (
        <div>
          <ul>
            {data.map(el => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ul>
        </div>
      );


}