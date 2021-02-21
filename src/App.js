import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';

import Menu from './Menu';
import Landing from './Landing';
import CloutLinks from './CloutLinks';
import Counter from './Counter';
import AboutMe from './AboutMe'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about-me" component={AboutMe} />
          <Route path='/clout-links' component={CloutLinks} />
          <Route path='/counter' component={Counter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
