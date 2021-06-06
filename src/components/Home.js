import Header from '../components/Header';
import Projects from '../components/Projects';
import Subheader from '../components/Subheader';
import useFetch from '../hooks/useFetch';

const Home = () => {
  // const { data: projects, isLoading, error } = useFetch('http://localhost:8000/projects')
  const { data: projects, isLoading, error } = useFetch('https://react-sass-server.herokuapp.com/projects')

  return (
    <div className="App">
      <Header />
      <Subheader icon="" iconDescription="" title="My projects" buttonText="Add project" />
      { error && <div>{error}</div>}
      { isLoading && <div>Loading...</div>}
      { projects && <Projects projects={projects} />}
    </div>
  );
}

export default Home;