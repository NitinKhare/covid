import React, { Component, Fragment } from 'react';
import {Pie} from 'react-chartjs-2';

export class PieChart extends Component {

    constructor(props){
        super(props);
        this.state={
            labels:["Critical","Active","Recovered","Death"],
            
            datasets:[{
                backgroundColor:['orange','blue','green', 'red'],
                data:[this.props.collectiveData.critical,this.props.collectiveData.active, this.props.collectiveData.recovered, this.props.collectiveData.deaths]
            }]
        }
    }

    render() {
        return (
            <Fragment>
            <h6>Cases Breakdown</h6>
            <Pie 
              data ={this.state}
              />
              </Fragment>
        )
    }
}

export default PieChart
