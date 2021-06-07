const ProjectStatus = ({projectstatus}) => {
  // Convert first letter to Uppercase
  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="project-status">
      <p className="project-status__value">{jsUcfirst(projectstatus)}</p>
    </div>
  );
}

export default ProjectStatus;