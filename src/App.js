import './App.css';
import Auth from './pages/Auth/Auth';
import LandingPage from './pages/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header/Header';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
