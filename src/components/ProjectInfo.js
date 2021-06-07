const ProjectInfo = ({projectname, projectdate}) => {
  return (
    <div className="project-info">
      <p className="project-info__name">{projectname}</p>
      <p className="project-info__date">{projectdate}</p>
    </div>
  );
}

export default ProjectInfo;