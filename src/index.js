import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navheader from './components/organisms/Navheader';
import Footer from './components/organisms/Footer';
import Education from './components/pages/Education';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navheader />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
