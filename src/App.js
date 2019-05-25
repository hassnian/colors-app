import React from "react";
import Palette from "./Palette";
import seedColors from './seedColors'
import { generatePalettes } from "./ColorHelpers";
import './App.css'

function App() {
  return (
    <div className="App">
    {console.log(generatePalettes(seedColors[3]))}
      <Palette palette={generatePalettes(seedColors[3])}/>
    </div>
  );
}

export default App;
