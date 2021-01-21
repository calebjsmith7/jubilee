import React, { Component } from 'react';
import '../App.css';


class Lowermenu extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
            <div className="lower">
          <div className="line1">
            <div className="cols">• CONTACT US •</div>
            <div className="cols">• BUSINESS DIRECTORY •</div>
          
          
            <div className="cols">• CAREER OPPORTUNITIES •</div>
            <div className="cols">• MESSAGES •</div>
          
          
            <div className="cols">• GET INVOLVED •</div>
            <div className="cols">• EVENTS •</div>
          
          
            <div className="cols">• GIVE •</div>
            <div className="cols">• WATCH LIVE •</div>
          
            <div className="cols">• ABOUT US •</div>
            <div className="cols">• 2018 FINANCIAL REPORT •</div>
          
            <div className="cols">• SPOTIFY PLAYLIST •</div>
            <div className="cols">• NEWSLETTER SIGNUP •</div>
          
            <div className="cols">• PRAYER REQUEST •</div>
            <div className="cols">• ANSWERED PRAYER •</div>
          </div>
          <div className="cw">© 2021 JUBILEE FELLOWSHIP CHURCH • 8200 SOUTHPARK CIR. LITTLETON, CO 80120 • 303.728.9416</div>
        </div>
          )
        };
    }
    
export default Lowermenu;