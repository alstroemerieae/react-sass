import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className="App">
      <Header/>
      <Subheader title="My project"/>
      <Projects/>
    </div>
  );
}

export default Home;