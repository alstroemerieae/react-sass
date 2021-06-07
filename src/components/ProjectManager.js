import projectManagerImage from '../assets/project-manager.png'

const ProjectManager = ({projectmanager}) => {
  return (
    <div className="project-manager">
      <img className="project-manager__image" src={projectManagerImage} alt="" />
      <p className="project-manager__name">{projectmanager}</p>
    </div>
  );
}

export default ProjectManager;