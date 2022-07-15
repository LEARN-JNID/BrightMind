import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
    render() {
        
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Mood Chart"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				showInLegend: "true",
				legendText: "{label}",
				dataPoints: [
					{ y: this.props.moods.okay, label: "Okay" },
					{ y: this.props.moods.sad, label: "Sad" },
					{ y: this.props.moods.good, label: "Good" },
					{ y: this.props.moods.happy, label: "Happy" },
					{ y: this.props.moods.miserable, label: "Miserable" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Chart;