import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import './Navbar.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleChange=this.handleChange.bind(this)
    this.state = {
       format:"hex"
    }
  }
  handleChange(e){
    this.setState({
      format:e.target.value
    },()=>{
      this.props.handleChange(this.state.format)
    })
    
  }
  render() {
    const { level, changeLevel ,handleChange} = this.props;
    const { format} = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
            <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              step={100}
              min={100}
              max={900}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
        <Select onChange={this.handleChange} value={format}>
          <MenuItem  value="hex">HEX -#ffffff</MenuItem>
          <MenuItem value="rgb">RGB -rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA -rgb(255,255,255,1)</MenuItem>
        </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
