import React, { useState, useEffect } from "react";
import Search from "./components/Search/";
import Result from "./components/Result/";
import "./App.css";

function App() {
  const [item, setItem] = useState("nature");
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(10);

  const handleInc = () => {
    if (counter < 100) {
      setCounter(counter + 10);
    }
  };

  const handleDec = () => {
    if (counter > 10) {
      setCounter(counter - 10);
    }
  };

  const handleChange = (event) => {
    setItem(event.target.value);
    console.log(event.target.value);
  };
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=20869091-ffe7c1dfbbcd0b2fb444f1fb6&q=${item}&per_page=${counter}`
    )
      .then((res) => res.json())
      .then((res) => setData(res.hits));
  }, [item, counter]);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <h1>FrontEnd - Search Functionality</h1>
      </header>
      <Search item={item} handleChange={handleChange} />
      <Result data={data} handleDec={handleDec} handleInc={handleInc} />
    </div>
  );
}

export default App;
