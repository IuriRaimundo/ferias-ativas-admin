import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { DashboardContextProvider } from './utils/DashboardContext';

function App() {
  return (
    <DashboardContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </DashboardContextProvider>
  );
}

export default App;
