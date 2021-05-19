import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/title';
import Home from './components/home';
import Live from './components/live';
import Demand from './components/demand';
import Give from './components/give';
import Events from './components/events';
import Kids from './components/kids';
import Adults from './components/adults';
import Lowermenu from './components/lowermenu';
import Stream from './components/stream';


class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Title />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/live' component={Live} />
              <Route exact path='/on-demand' component={Demand} />
              <Route exact path='/give' component={Give} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/kids' component={Kids} />
              <Route exact path='/adults' component={Adults} />
              <Route exact path='/stream' component={Stream} />
            </Switch>
          </div>
          <Lowermenu />
        </div>
      </Router>
    )};
    }

export default App;
