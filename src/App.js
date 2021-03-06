import React from "react";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import SingleColorPalette from "./SIngleColorPalette";
import { generatePalettes } from "./ColorHelpers";
import { Route, Switch  } from "react-router-dom";
import NewPaletteForm from './NewPaletteForm'
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
          exact path="/palette/new"
          component={NewPaletteForm}
          />
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
          path='/palette/:paletteId/:colorId'
          render={() => <SingleColorPalette />}
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalettes(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        </Switch>
        {/* <Palette palette={generatePalettes(seedColors[4])} /> */}
      </div>
    );
  }
}

export default App;
