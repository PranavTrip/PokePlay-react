import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${num}`
      );
      //   console.log(result.data.moves.length);
      //   console.log(result.data.name);
      setName(result.data.name);
      setMoves(result.data.moves.length);
    }

    getData();
  });

  const getRandomValue = () => {
    setNum(Math.floor(Math.random() * (100 - 1)) + 1);
  };
  return (
    <>
     <h1> Welcome To "PokePlay Game"</h1>
      <div className="main_div">
     
        <div className="center_div">
          <h1>
            Your number is <span>{num}</span>
          </h1>
          <br />
          <h1>
            Your pokemon is :<span> {name} </span>and
          </h1>
          <h1>
            <span> {name } </span>has
            <span> {moves} </span>moves
          </h1>
          
          <button onClick={getRandomValue}> Click ME </button>
         
        </div>
      </div>
      <footer> Developed by "wiki._.ped.ia"</footer>
    </>
  );
};

export default App;
