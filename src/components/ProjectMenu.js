import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Popover } from 'react-tiny-popover'
import deleteIcon from '../assets/deleteIcon.svg'
import editIcon from '../assets/editIcon.svg'
import menuIcon from '../assets/menuIcon.svg'

const ProjectMenu = ({projectid}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleDelete = () => {
    // fetch('http://localhost:8000/projects/' + projectID, {
    fetch('https://react-sass-server.herokuapp.com/projects/' + projectid, {
      method: 'DELETE'
    })
    console.log("Deleting project...");
  }

  return (
    <div className="project-menu">
      <Popover
        isOpen={isPopoverOpen}
        positions={['left', 'top', 'bottom', 'right']} // preferred positions by priority
        content={
          <div className="popOverMenu">
            <div className="popOverMenu--link-container">
              <img className="popOverMenu--link-container__icon" src={editIcon} alt="" />
              <Link className="popOverMenu--link-container__link" to={`/update/${projectid}`}>Edit</Link>
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

export default ProjectMenu;