import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

export class CasesLineChart extends Component {

    constructor(props){
        super(props);
        this.state={
            chartData : {
                labels:Object.keys(this.props.date.timeline.cases).slice(7),
                datasets:[{
                label: 'Cases',
                fill: false,
                lineTension: 1.5,
                backgroundColor: 'rgba(255,0,255,1)',
                borderColor: 'rgba(255,0,255,1)',
                borderWidth: 1,
                data:Object.values(this.props.date.timeline.cases).slice(7)
            }]
            }
        }
    }

    render() {
        console.log(this.state)
        if (this.props && this.state && this.state.chartData &&  this.state.chartData.labels && this.state.chartData.labels.length) {
        return (
            <div className="chart">
            <Line
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'Rise in CoronaVirus cases',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
            </div>
        )
        }else{
            return(
                <div>NO CHART</div>
            )
        }
    }
}

export default CasesLineChart
