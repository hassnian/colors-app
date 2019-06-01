import React from "react";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import SingleColorPalette from "./SIngleColorPalette";
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
            render={routeProps => (
              <PaletteList {...routeProps} palettes={seedColors} />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette
                palette={generatePalettes(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path="/palette/:palette_id/:color_id"
            render={() => <SingleColorPalette />}
          />
        </Switch>
        {/* <Palette palette={generatePalettes(seedColors[4])} /> */}
      </div>
    );
  }
}

export default App;
