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
      </Switch>
    </Router>
  );
}

export default App;