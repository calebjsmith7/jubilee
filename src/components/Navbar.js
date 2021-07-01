import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = ({title}) =>{

    function handleCollapse() {
        var nav = document.getElementById("navbarSupportedContent");
        var btn = document.getElementById("navbarbtn");
        nav.classList.remove("show");
        btn.classList.add("collapsed");
    }



    return (
        <nav className="navbar navbar-expand-md navbar-dark navv">
            <button className="navbar-toggler n" id="navbarbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto n">
          <li className="nav-item active"><Link to='/' className="nav-link l" onClick={handleCollapse}>HOME <span className="sr-only">(current)</span></Link></li>
          <li className="nav-item active"><Link to='/live' className="nav-link l" onClick={handleCollapse}>LIVE</Link></li>
          <li className="nav-item active"><Link to='/on-demand' className="nav-link l" onClick={handleCollapse}>ON DEMAND</Link></li>
          <li className="nav-item active"><Link to='/give' className="nav-link l" onClick={handleCollapse}>GIVE</Link></li>
          <li className="nav-item active"><Link to='/events' className="nav-link l" onClick={handleCollapse}>EVENTS</Link></li>
          <li className="nav-item active"><Link to='/kids' className="nav-link l" onClick={handleCollapse}>KIDS</Link></li>
          <li className="nav-item active"><a href='https://www.theblockjsm.com/' className="nav-link l">YOUTH</a></li>
          <li className="nav-item active"><Link to='/adults' className="nav-link l" onClick={handleCollapse}>ADULTS</Link></li>
          </ul>
        </div>
        </nav>
    )
}
export default Navbar