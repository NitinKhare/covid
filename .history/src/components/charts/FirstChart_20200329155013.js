import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { VictoryBar } from 'victory';

export class FirstChart extends Component {
    render() {
        const data = [
            {quarter: 1, earnings: 13000},
            {quarter: 2, earnings: 16500},
            {quarter: 3, earnings: 14250},
            {quarter: 4, earnings: 19000}
          ];
        return (
            <div>
                < VictoryBar
            </div>
        )
    }
}

export default FirstChart
