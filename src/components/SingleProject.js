const SingleProject = ({ projectName, projectDate, projectDeveloperImage, projectDeveloper, projectID }) => {



  return (
    <div className="App-project">
      {/* Project details section */}
      <div className="App-project--details">
        {/* Project details */}
        <div className="App-project--details-values">
          <div className="App-project--details--values__name">
            {projectName}
          </div>
          <div className="App-project--details-values__creation-date">
            {projectDate}
          </div>
        </div>
        {/* Project PopOver menu */}

      </div>
      {/* Project user section */}
      <div className="App-project--user">
        <div className="App-project--user__image">
          <img src={projectDeveloperImage} alt="Project Developer"></img>
        </div>
        <div className="App-project--user__name">
          {projectDeveloper}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;