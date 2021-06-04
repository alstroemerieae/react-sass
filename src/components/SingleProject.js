import menuIcon from '../assets/menuIcon.svg'
import deleteIcon from '../assets/deleteIcon.svg'
import editIcon from '../assets/editIcon.svg'
import { Popover } from 'react-tiny-popover'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SingleProject = ({projectName, projectDate, projectDeveloperImage, projectDeveloper, projectID}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleDelete = () => {
    fetch('http://localhost:8000/projects/' + projectID, {
      method: 'DELETE'
    })
    console.log("Deleting project...");
  }

  return (
    <div className="App-project">
      {/* Project details section */}
      <div className="App-project--details">
        <div className="App-project--details__name">
          {projectName}
        </div>
        <div className="App-project--details__creation-date">
          {projectDate}
        </div>
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
      {/* Project menu PopOver */}
      <Popover
        isOpen={isPopoverOpen}
        positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
        content={
          <div className="popOverMenu">
            <div className="popOverMenu--link-container">
              <img className="popOverMenu--link-container__icon" src={editIcon} alt="" />
              <Link className="popOverMenu--link-container__link" to={`/update/${projectID}`}>Edit</Link>
            </div>
            <div className="popOverMenu--link-container">
              <img className="popOverMenu--link-container__icon" src={deleteIcon} alt="" />
              <Link className="popOverMenu--link-container__link" onClick={handleDelete}>Delete</Link>
            </div>
          </div>
        }
      >
        <div className="App-project--menu" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
          <div className="App-project--menu__icon">
            <img src={menuIcon} alt="Menu icon" />
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default SingleProject;