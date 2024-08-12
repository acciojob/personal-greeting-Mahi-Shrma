
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setname] = useState("");
  function renderName(){
    setname(e.target.value);
  }

  return (
    <div>
        <label for="name">Enter your name:</label><br/>
        <input id="name" type="text" onChange={renderName}></input>
        <p>Hello {name}!</p>
    </div>
  );
}

export default App;
