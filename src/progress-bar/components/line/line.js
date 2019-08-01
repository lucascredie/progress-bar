import React from 'react';

class LineBar extends React.Component {
    
    render() {
        let duration = {transition: this.props.all.animationDuration};
        let roundness = this.props.all.radius;
        
        let dimensions = {
            width: this.props.all.width,
            height: this.props.all.height
        };

        let progress = (dimensions.width/this.props.all.total) * this.props.all.progress; //in pixels, not percentage
   
        let colors = {
            innerColor: this.props.all.innerColor,
            outterColor: this.props.all.outterColor
        };

        return (
            <svg id={this.props.all.id} className={this.props.all.className} style={dimensions}>
                <rect x="0" y="0" width={dimensions.width} height={dimensions.height} fill={colors.innerColor} rx={roundness} />
                <rect x="0" y="0" width={progress} height={dimensions.height} fill={colors.outterColor} style={duration} rx={roundness} />
            </svg>
        )
    }
}

export default LineBar;