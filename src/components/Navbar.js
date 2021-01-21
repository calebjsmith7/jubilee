import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = ({title}) =>{
    return (
        <nav className="navbar navbar-expand-md navbar-dark navv">
            <button className="navbar-toggler n" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto n">
          <li className="nav-item active"><Link to='/' className="nav-link l">HOME <span className="sr-only">(current)</span></Link></li>
          <li className="nav-item active"><Link to='/live' className="nav-link l">LIVE</Link></li>
          <li className="nav-item active"><Link to='/on-demand' className="nav-link l">ON DEMAND</Link></li>
          <li className="nav-item active"><Link to='/give' className="nav-link l">GIVE</Link></li>
          <li className="nav-item active"><Link to='/events' className="nav-link l">EVENTS</Link></li>
          <li className="nav-item active"><Link to='/kids' className="nav-link l">KIDS</Link></li>
          <li className="nav-item active"><a href='https://www.theblockjsm.com/' className="nav-link l">YOUTH</a></li>
          <li className="nav-item active"><Link to='/adults' className="nav-link l">ADULTS</Link></li>
          </ul>
        </div>
        </nav>
    )
}
export default Navbar