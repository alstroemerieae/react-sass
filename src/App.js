import './sass/App.scss';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AddProject from './components/AddProject';
import EditProject from './components/EditProject';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/add">
          <AddProject/>
        </Route>
        <Route path="/edit">
          <EditProject/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;