import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/Private';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Switch>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/login' component={Login}/>
      <PrivateRoute exact path = '/about' component={About} />
      <PrivateRoute exact path = '/dashboard' component={Dashboard} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
