import SingleProject from "./SingleProject";
import image from '../assets/Ellipse 46.png'

const Projects = ({projects}) => {
  // console.log(projects[0].projectname)
  return (
    <div className="App-projects">
      <div className="App-projects-list">
        {projects.map((project) => (
          <SingleProject 
            projectName={project.projectname}
            projectDescription={project.projectdescription}
            projectDate={project.projectdate}
            projectDeveloper={project.projectdeveloper}
            projectDeveloperImage={image}
            projectID={project.id}
            // projectManager={project.projectmanager}
            // projectManagerImage={project.projectmanageromage}
            // Check if key is working
            key={project.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;