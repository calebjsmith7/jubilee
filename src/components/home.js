import React, { Component } from 'react';
import '../App.css';
import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';
import d from '../images/d.png';
import e from '../images/e.png';
import f from '../images/f.png';
import g from '../images/g.png';
import h from '../images/h.png';


class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="middle">
        <video autoPlay={true} autostart="true" loop={true} muted={true} preload="true" id="background" width="100%" className="video">
          <source src="https://jfc.org/videos/video-background-2020.mp4" type="video/mp4" id="vid"></source>
        </video>
        <a href="/live" className="overlay">WATCH LIVE</a>
        <div className="bottom">
          <div className="overlay2"><span className="o2text"><br/>JOIN US IN PERSON THIS WEEKEND <br/> CLICK HERE TO LEARN MORE TO ATTEND A SERVICE</span></div>
          <div className="legacy"><span className="o2text"><br/>BUILDING A LEGACY FOR TOMORROW<br/>CLICK HERE FOR MORE INFORMATION</span></div>
        </div>
        </div>
        <div className="lower">
          <div className="box1">
            <div className="item"><img src={a} className="pics"></img></div>
            <div className="item"><img src={b} className="pics"></img></div>
            <div className="item"><img src={c} className="pics"></img></div>
            <div className="item"><img src={d} className="pics"></img></div>

            <div className="item"><img src={e} className="pics"></img></div>
            <div className="item"><img src={f} className="pics"></img></div>
            <div className="item"><img src={g} className="pics"></img></div>
            <div className="item"><img src={h} className="pics"></img></div>
      
          </div>
        </div>
      </div>
      
    );
  }
}

export default Home;
