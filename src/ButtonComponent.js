import React, { useState } from "react";
export default function  Button() {
  /*constructor() {
    super();
    this.state = { buttonText: "Click me, please" };
    this.handleClick = this.handleClick.bind(this);
  }*/

//____________new syntax___________//
//state = { buttonText: "Click me, please" };

  /*handleClick() {
    this.setState(() => {
      return { buttonText: "Thanks, been clicked!" };
    });
  }*/

  const [buttonText,setButtonText] = useState("Click me, please");


//____use arrow function____________//

function handleclick()
{
    return setButtonText("Thanks, been clicked!");
}



 
    return (<button onClick={handleclick}>{buttonText}</button>);
  
}