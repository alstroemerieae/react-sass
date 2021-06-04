import './sass/App.scss';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Subheader/>
      <Projects/>
    </div>
  );
}

export default App;