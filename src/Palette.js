import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'
export class Palette extends Component {
    render() {
        const colorsBoxes=this.props.colors.map(color=><ColorBox background={color.color} name={color.name}/>)
        return (
            <div className="Palette">
               <div className="Palette-colors">
{colorsBoxes}
               </div>
            </div>
        )
    }
}

export default Palette
