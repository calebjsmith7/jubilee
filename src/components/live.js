import { now } from 'jquery';
import React, { Component } from 'react';
import Timer from 'react-compound-timer/build';
import '../App.css';
import block1 from '../images/block1.png';
import block2 from '../images/block2.png';
import block3 from '../images/block3.png';
import block4 from '../images/block4.png';


class Live extends Component {
    constructor(props){
      super(props);
    }

    render() {
        const nowTime = new Date();
        let timer = new Date();
        
        switch (nowTime.toString().substring(0,3)) {
            //sun not included for readability, two services
            case 'Mon': timer.setHours(136,0,0,0);
            break;
            case 'Tue': timer.setHours(112,0,0,0);
            break;
            case 'Wed': timer.setHours(88,0,0,0);
            break;
            case 'Thu': timer.setHours(64,0,0,0);
            break;
            case 'Fri': timer.setHours(40,0,0,0);
            break;
        }
        
        if(nowTime.toString().substring(0,3) == 'Sun' && parseInt(nowTime.toString().substring(16,18)) < 9 ) {
            timer.setHours(9,0,0,0);
        } else if(nowTime.toString().substring(0,3) == 'Sun' && 11 > parseInt(nowTime.toString().substring(16,18)) > 9) {
            timer.setHours(11,0,0,0);
        } else if(nowTime.toString().substring(0,3) == 'Sun' && parseInt(nowTime.toString().substring(16,18)) > 11) {
            timer.setHours(136,0,0,0);
        }
        if(nowTime.toString().substring(0,3) == 'Sat' && parseInt(nowTime.toString().substring(16,18)) < 16 ) {
            timer.setHours(16,0,0,0);
        } else if(nowTime.toString().substring(0,3) == 'Sat' && parseInt(nowTime.toString().substring(16,18)) > 16) {
            timer.setHours(33,0,0,0);
        }
        
      const miliTime = timer.getTime();
      const difference = miliTime - nowTime.getTime();
      

      const time = difference;

      return (

    <div className="livePage">
  <Timer initialTime={time} direction="backward">
      {() => (
          <React.Fragment>
              <div id="timer">
                  <h1 id="liveTitle">WATCH LIVE IN</h1>
              <div className="test"><Timer.Days />:</div>
              <div className="test"><Timer.Hours />:</div>
              <div className="test"><Timer.Minutes />:</div>
              <div className="test"><Timer.Seconds /></div>
              <p className="timerInfo">-LIVE SERVICE TIMES (MDT)-</p>
              <p className="timerInfo">SAT - 4:00PM // SUN - 9:00AM // SUN - 11:00AM</p>
              </div>
              </React.Fragment>
      )}
  </Timer>
    <div className="box1">
            <div className="item"><a href="/give"><img src={block1} className="pics"></img></a></div>
            <div className="item"><a href=""><img src={block2} className="pics"></img></a></div>
            <div className="item"><a href=""><img src={block3} className="pics"></img></a></div>
            <div className="item"><a href="/demand"><img src={block4} className="pics"></img></a></div>
    </div>
  </div>

        )
    };
}

export default Live;