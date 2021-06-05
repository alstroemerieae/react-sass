import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';
import Home from './components/Home';
import './sass/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <AddProject />
        </Route>
        <Route path="/update/:id">
          <EditProject />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;