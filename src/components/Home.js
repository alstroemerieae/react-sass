import Header from '../components/Header';
import Subheader from '../components/Subheader';
import Projects from '../components/Projects';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data: projects, isLoading, error } = useFetch('http://localhost:8000/projects')

  return (
    <div className="App">
      <Header/>
      <Subheader icon="" iconDescription="" title="My projects" buttonText="Add project"/>
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { projects && <Projects projects={projects}/> }
    </div>
  );
}

export default Home;