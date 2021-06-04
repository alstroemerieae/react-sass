import SingleProject from "./SingleProject";
import image from '../assets/Ellipse 46.png'

const Projects = () => {
  return (
    <div className="App-projects">
      <div className="App-projects-list">
        {/* Project #1 */}
        <SingleProject
          projectName={"Landing page"}
          projectDate={"Creation date:  09/09/2020 10:30 am"}
          userImage={image}
          userName={"Ignacio Truffa"}
        />
        {/* Project #2 */}
        <SingleProject
          projectName={"E-Commerce Shop"}
          projectDate={"Creation date:  09/09/2020 10:30 am"}
          userImage={image}
          userName={"Ignacio Truffa"}
        />
        {/* Project #3 */}
        <SingleProject
          projectName={"CRM Linkroom"}
          projectDate={"Creation date:  09/09/2020 10:30 am"}
          userImage={image}
          userName={"Ignacio Truffa"}
        />
      </div>
    </div>
  );
}

export default Projects;