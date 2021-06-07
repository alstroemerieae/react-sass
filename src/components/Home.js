import Header from '../components/Header';
import Projects from '../components/Projects';
import Subheader from '../components/Subheader';
import useFetch from '../hooks/useFetch';
import Table from './Table';
import React, { useMemo } from 'react'
import ProjectInfo from './ProjectInfo';
import ProjectManager from './ProjectManager';
import ProjectDeveloper from './ProjectDeveloper';
import ProjectStatus from './ProjectStatus';
import ProjectMenu from './ProjectMenu';



const Home = () => {
  // const { data: projects, isLoading, error } = useFetch('http://localhost:8000/projects')
  const { data: projects, isLoading, error } = useFetch('https://react-sass-server.herokuapp.com/projects')
  // console.log(projects)
  const columns = useMemo(
    () => [
      {
        Header: "Project info",
        // accessor: "projectname",
        // accessor: data => `${data.projectname} ${data.projectdate}`
        accessor: data => <ProjectInfo projectname={data.projectname} projectdate={data.projectdate}/>
        
      },
      {
        Header: "Project manager",
        // accessor: "projectmanager"
        accessor: data => <ProjectManager projectmanager={data.projectmanager}/>
      },
      {
        Header: "Asigned to",
        // accessor: "projectdeveloper"
        accessor: data => <ProjectDeveloper projectdeveloper={data.projectdeveloper}/>
      },
      {
        Header: "Status",
        // accessor: "projectstatus"
        accessor: data => <ProjectStatus projectstatus={data.projectstatus}/>
      },
      {
        Header: "Action",
        // accessor: "projectdescription"
        accessor: data => <ProjectMenu projectid={data.id}/>
      }
    ]
  );
  return (
    <div className="App">
      <Header />
      <Subheader icon="" iconDescription="" title="My projects" buttonText="Add project" />
      { error && <div>{error}</div>}
      { isLoading && <div>Loading...</div>}
      {/* { projects && <Projects  />} */}
      { projects && <Table columns={columns} data={projects} />}
    </div>
  );
}

export default Home;