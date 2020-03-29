import React,{Fragment} from 'react'
import CountUp from 'react-countup';

function CollectiveInfo(props) {
    return(
    <Fragment>
    <h3>Data for {props.collectiveData.country}'s Total Cases : <CountUp end={props.collectiveData.cases} duration={2.50} /> </h3>
    <br/>
        <div className="row" >
        <div className="col-sm-4 figure">
            <img className="figure-img img-fluid rounded" style={{width:"100%"}} src={props.collectiveData.countryInfo.flag} alt={props.collectiveData.country} />
            <br/>
            <figcaption className="figure-caption text-center">Country : {props.collectiveData.country}</figcaption>
        </div>
        <div className="col-sm-6 figure">
            <div className="row" style={{lineHeight: "50px"}}>
           
            <div className="col-sm-12 w-100">
             <h6>Total Cases : <span className="badge badge-primary"><CountUp duration={3.50}  end={props.collectiveData.cases} /> </span></h6>
            </div>
            <div className="col-sm-12">
             <h6>Active : <span className="badge badge-dark"><CountUp duration={3.50} end={props.collectiveData.active} /></span></h6>
            </div>
            <div className="col-sm-12">
             <h6>Recovered : <span className="badge badge-success"><CountUp duration={3.50} end={props.collectiveData.recovered} /></span></h6>
            </div>
            <div className="col-sm-12">
             <h6>Deaths : <span className="badge badge-danger"><CountUp duration={3.50} end={props.collectiveData.deaths} /></span></h6>
            </div>
            <div className="col-sm-12">
             <h6>Today's Deaths : <span className="badge badge-warning"><CountUp duration={3.50} end={props.collectiveData.todayDeaths} /></span></h6>
            </div>
            <div className="col-sm-12">
             <h6>Cases Per Million : <span className="badge badge-info">{props.collectiveData.casesPerOneMillion}</span></h6>
            </div>
            </div>
        </div>
    </div>
    </Fragment>
    )

}

export default CollectiveInfo