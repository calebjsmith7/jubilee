import React, { Component } from 'react';
import '../App.css';
import fb from '../images/fb.png';
import give from '../images/give.png';
import twitter from '../images/twitter.png';
import insta from '../images/insta.png';


class Title extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (

<div className="App">
    <div id="top">
    <div className="space"></div>
          <a href="./home"><div id="jfc"></div></a>
          <div className="iconz">
        <div className="iconRow">
            <a href="./give"><img src={give} className="icon"></img></a>
            <a href="https://www.facebook.com/Jubilee-Fellowship-Church-342057312794169/"><img src={fb} className="icon"></img></a>
            <a href="https://twitter.com/jubileemain"><img src={twitter} className="icon"></img></a>
            <a href="http://instagram.com/jubileemain"><img src={insta} className="icon"></img></a>
        </div>
        </div>
    </div>
</div>
        )
    };
}

export default Title;