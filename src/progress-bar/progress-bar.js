import React from 'react';
import CircleBar from './components/circle/circle';
import LineBar from './components/line/line';
import CustomBar from './components/custom-shape/custom'

/*
    Shape:
        circular:
            radius
            ticcness
            edges
        Linear:
            width
            height
            outer-roundness: 33 border radius on svg
            inner-roundness rx-ry props
        Custom:
            ?????
    Orientation: from left to right ot right to left
    InnerColor
    OuterColor
    Progress: percentage
    Total: max percentage
    Animated = true || false
        AnimateFrom: percentage/units
        AnimationDuration: 200ms
        AnimationDelay: 400 \\ "on view"
 */

class ProgressBar extends React.Component {
    render() {
        //decides on type of component to display
        if(this.props.type === "circle") {
            return ( <CircleBar></CircleBar> )
        } else if(this.props.type === "line") {
            return ( <LineBar all={this.props}></LineBar>)
        } else if(this.props.type === "custom") {
            return (<CustomBar></CustomBar>)
        } else {
            return (
            <div>
                <p>Please declare type property: (circle, line or custom). <a href="https://www.google.com/search?q=how+to+learn+react" target="_blank">Learn more</a></p>
            </div>
            )
        }
     
    }
    
}

export default ProgressBar;