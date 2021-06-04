import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <div className="App">
      <Header/>
      <Subheader icon="" iconDescription="" title="My projects" buttonText="Add project"/>
      <Projects/>
    </div>
  );
}

export default Home;