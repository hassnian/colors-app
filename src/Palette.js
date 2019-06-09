import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";
import PaletteFooter from './PaletteFooter'
import { withStyles } from "@material-ui/styles";

const styles = {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  }
};
export class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format:"hex"
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(value) {
    this.setState({format:value});
  }
  render() {
    const { colors ,paletteName,emoji,id} = this.props.palette;
    const {classes}=this.props
    const { level ,format} = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox  moreUrl={`/palette/${id}/${color.id}`} showingFullPalette key={color.id} paletteId={id} id={color.id} background={color[format]} name={color.name} />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          handleChange={this.changeFormat}
          level={level}
          changeLevel={this.changeLevel}
          showingAllColors
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter 
        paletteName={paletteName}
        emoji={emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
