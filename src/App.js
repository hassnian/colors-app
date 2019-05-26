import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalettes } from "./ColorHelpers";
import { Route ,Switch} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={()=><h1>Pelette list gos here!</h1>}/>
      <Route exact path="/palette/:id" render={()=><h1>Invidual palette</h1>}/>
      </Switch>
      <Palette palette={generatePalettes(seedColors[4])} />
    </div>
  );
}

export default App;
