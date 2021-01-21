import React, { Component } from 'react';
import '../App.css';
import giving from '../images/giving.jpg';
import ncgiving from '../images/non-cash-giving.pdf';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';


class Give extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (

<div className="App">
    <div className="give">
        <div className="givectr">
            <img src={giving} className="giveimg"></img>
            <h1 className="g1">WHY WE GIVE</h1>
            <p className="l"> Jubilee is generous with our money and possessions. The Bible tells us to give a 
                <br/>portion of our income to the church. No other group has the potential to make a 
                <br/>greater impact than the local church. Jubilee believes that giving is an act of
                <br/>worship and obedience. When we give, we become a part of what God is doing.
            </p>
            <div className="button-block">
            <button className="btn btn-dark m-3 l btn-block"><a href="https://pushpay.com/g/jfclonetree" className="unlink">LONE TREE</a></button>
            </div>
            <div className="button-block">
            <button className="btn btn-dark m-3 l btn-block"><a href="https://pushpay.com/g/jfconline" className="unlink">ONLINE</a></button>
            </div>
            <p className="p1">If you prefer to mail a check, cash or drop by our office, here is our address:</p>
            <p className="p1">JUBILEE FELLOWSHIP CHURCH OFFICES
                <br/>8200 SOUTHPARK CIR. STE A
                <br/>LITTLETON, CO 80120
            </p>
            <h1 className="g2">DONATE NON-CASH GIFTS</h1>
            <p className="l">If you would like to donate stocks, bonds, precious metals, vehicles or any other 
                <br/>assets, please contact our business office
            </p>
            <div className="button-block">
            <button className="btn btn-dark m-3 l btn-block"><a href="mailto:contributions@jfc.org" className="unlink">QUESTIONS OR DONATE</a></button>
            </div>
            <div className="button-block">
            <button className="btn btn-dark m-3 l btn-block"><a href={ncgiving} className="unlink">NON-CASH GIVING EXAMPLES</a></button>
            </div>

        </div>
    </div>
</div>
        )
    };
}

export default Give;