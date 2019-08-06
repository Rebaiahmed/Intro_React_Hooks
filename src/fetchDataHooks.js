import React, { useState, useEffect } from "react";


export default function DataLoaderHook(props)
{

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(response => response.json())
          .then(data => setData(data));
      }, []); // << super important array



     // return props.render(data)

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