import React, { Component } from 'react'
import { VictoryBar } from 'victory';

export class FirstChart extends Component {
    render() {

        return (
            <div>
                <VictoryBar
                 data={data}
                 x="quarter"
                 y="earnings"
                />
            </div>
        )
    }
}

export default FirstChart
