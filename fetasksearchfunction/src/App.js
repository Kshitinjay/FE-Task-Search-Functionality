import React, { useState, useEffect } from "react";
import Search from "./components/Search/";
import Result from "./components/Result/";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(5);

  const handleInc = () => {
    if (counter < 50) {
      setCounter(counter + 5);
    }
  };

  const handleDec = () => {
    if (counter > 5) {
      setCounter(counter - 5);
    }
  };

  const handleChange = (event) => {
    setItem(event.target.value);
  };
  useEffect(() => {
    if (item.length >= 3) {
      fetch(
        `https://pixabay.com/api/?key=20869091-ffe7c1dfbbcd0b2fb444f1fb6&q=${item}&per_page=${counter}`
      )
        .then((res) => res.json())
        .then((res) => setData(res.hits));
    }
  }, [item, counter]);

  // console.log(data);

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
