import React from 'react';

class LineBar extends React.Component {
    
    render() {
        let duration = {transition: "500ms"};
        let roundness = "0px";
        
        let dimensions = {
            width: this.props.all.width,
            height: this.props.all.height
        };

        let progress = (dimensions.width/this.props.all.total) * this.props.all.progress; //in pixels, not percentage
        
        let colors = {
            innerColor: "#555000",
            outterColor: "#FF0000"
        };

        return (
            <svg className={this.props.all.name} style={dimensions}>
                <rect x="0" y="0" width={dimensions.width} height={dimensions.height} fill={colors.innerColor} rx={roundness} />
                <rect x="0" y="0" width={progress} height={dimensions.height} fill={colors.outterColor} style={duration} rx={roundness} />
            </svg>
        )
    }
}

export default LineBar;