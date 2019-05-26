import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalettes } from "./ColorHelpers";
import { Route, Switch } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <h1>Pelette list gos here!</h1>}
          />
          <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalettes(this.findPalette(routeProps.match.params.id))}/>} />
        </Switch>
        {/* <Palette palette={generatePalettes(seedColors[4])} /> */}
      </div>
    );
  }
}

export default App;
