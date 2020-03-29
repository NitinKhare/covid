import React,{Fragment} from 'react';
import CountUp from 'react-countup';

function TotalStats(props) {
   if(props.totalStats && props.totalStats.active){
    return(
    <div className="row text-center">
    <p style={{paddingLeft: '15px'}}> <span className="badge badge-primary">Cases : <CountUp end={props.totalStats.cases} /></span> <span className="badge badge-warning">Active : <CountUp end={props.totalStats.active} /></span> <span className="badge badge-success">Recovered : <CountUp end={props.totalStats.recovered} /></span> <span className="badge badge-danger">Deaths : <CountUp end={props.totalStats.deaths} /></span></p>
   
</div>
    )
   }else{
       return(
           <Fragment></Fragment>
       )
   }

}

export default TotalStats