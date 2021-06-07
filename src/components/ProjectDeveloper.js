import projectDeveloperImage from '../assets/project-developer.png'

const ProjectDeveloper = ({projectdeveloper}) => {
  return (
    <div className="project-developer">
      <img className="project-developer__image" src={projectDeveloperImage} alt="" />
      <p className="project-developer__name">{projectdeveloper}</p>
    </div>
  );
}

export default ProjectDeveloper;