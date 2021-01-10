import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react';
import './App.css';
import fb from './images/fb.png';
import give from './images/give.png';
import twitter from './images/twitter.png';
import insta from './images/insta.png';
import a from './images/a.png';
import b from './images/b.png';
import c from './images/c.png';
import d from './images/d.png';
import e from './images/e.png';
import f from './images/f.png';
import g from './images/g.png';
import h from './images/h.png';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "caleb"
    };
  }
  render() {
    return (
      <div className="App">
        <div id="top">
          <div className="nav">
          <div className="sp"></div>
            <div className="n">LIVE</div>
            <div className="n">ON DEMAND</div>
            <div className="n">GIVE</div>
            <div className="n">EVENTS</div>
            <div className="n">KIDS</div>
            <div className="n">YOUTH</div>
            <div className="n">ADULTS</div>
            <div className="sp"></div>
          </div>
          <div className="space"></div>
          <div id="jfc"></div>
          <div className="iconRow">
            <img src={give} className="icon"></img>
            <img src={fb} className="icon"></img>
            <img src={twitter} className="icon"></img>
            <img src={insta} className="icon"></img>
          </div>
        </div>
        <div className="middle">
        <video autoPlay={true} autostart="true" loop={true} muted={true} preload="true" id="background" width="100%" className="video">
          <source src="https://jfc.org/videos/video-background-2020.mp4" type="video/mp4" id="vid"></source>
        </video>
        <a href="" className="overlay">WATCH LIVE</a>
        <div className="overlay2"><br/>JOIN US IN PERSON THIS WEEKEND <br/> CLICK HERE TO LEARN MORE TO ATTEND A SERVICE</div>
        <div className="bottom">
          <div className="legacy"><br/>BUILDING A LEGACY FOR TOMORROW<br/>CLICK HERE FOR MORE INFORMATION</div>
          <div className="box1">
            <div className="item"><img src={a} className="pics"></img></div>
            <div className="item"><img src={b} className="pics"></img></div>
            <div className="item"><img src={c} className="pics"></img></div>
            <div className="item"><img src={d} className="pics"></img></div>
            </div>
          <div className="box2">
            <div className="item"><img src={e} className="pics"></img></div>
            <div className="item"><img src={f} className="pics"></img></div>
            <div className="item"><img src={g} className="pics"></img></div>
            <div className="item"><img src={h} className="pics"></img></div>
          </div>
          <div className="line1">
            <div className="cols">• CONTACT US •</div>
            <div className="cols">• BUSINESS DIRECTORY •</div>
          </div>
          <div className="line2">
            <div className="cols">• CAREER OPPORTUNITIES •</div>
            <div className="cols">• MESSAGES •</div>
          </div>
          <div className="line3">
            <div className="cols">• GET INVOLVED •</div>
            <div className="cols">• EVENTS •</div>
          </div>
          <div className="line4">
            <div className="cols">• GIVE •</div>
            <div className="cols">• WATCH LIVE •</div>
          </div>
          <div className="line5">
            <div className="cols">• ABOUT US •</div>
            <div className="cols">• 2018 FINANCIAL REPORT •</div>
          </div>
          <div className="line6">
            <div className="cols">• SPOTIFY PLAYLIST •</div>
            <div className="cols">• NEWSLETTER SIGNUP •</div>
          </div>
          <div className="line7">
            <div className="cols">• PRAYER REQUEST •</div>
            <div className="cols">• ANSWERED PRAYER •</div>
          </div>
          <div className="cw">© 2021 JUBILEE FELLOWSHIP CHURCH • 8200 SOUTHPARK CIR. LITTLETON, CO 80120 • 303.728.9416</div>
        
        </div>
      </div>
      </div>
    );
  }
}

export default App;
