import React from "react";
import Start from "./components/Start";
import Memorise from "./components/Memorize";
import { useStateContext } from "./utils/store";
import Guess from "./components/Guess";
import Result from "./components/Result";

function App() {
  let stages = [<Start />, <Memorise />, <Guess />, <Result />];

  const state = useStateContext();
  return (
    <div className="flex flex-row justify-center mt-4">
      <div>{stages[state.stage]}</div>
    </div>
  );
}

export default App;
