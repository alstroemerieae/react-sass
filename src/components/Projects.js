import image from '../assets/Ellipse 46.png'
import menuIcon from '../assets/menuIcon.svg'
import deleteIcon from '../assets/deleteIcon.svg'
import editIcon from '../assets/editIcon.svg'
import { Popover } from 'react-tiny-popover'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  console.log(isPopoverOpen);


  return (
    <div className="App-projects">
      <div className="App-projects-list">
        {/* Project #1 */}
        <div className="App-project">
          {/* Project details section */}
          <div className="App-project--details">
            <div className="App-project--details__name">
              Landing page
          </div>
            <div className="App-project--details__creation-date">
              Creation date:  09/09/2020 10:30 am
          </div>
          </div>
          {/* Project user section */}
          <div className="App-project--user">
            <div className="App-project--user__image">
              <img src={image} alt="Project user name"></img>
            </div>
            <div className="App-project--user__name">
              Ignacio Truffa
          </div>
          </div>
          {/* Project menu icon */}
          <Popover
            isOpen={isPopoverOpen}
            positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
            content={
              <div className="popOverMenu">
                <div className="popOverMenu--link-container">
                  <img className="popOverMenu--link-container__icon" src={editIcon} alt="" />
                  <Link className="popOverMenu--link-container__link" to="/edit">Edit</Link>
                </div>
                <div className="popOverMenu--link-container">
                  <img className="popOverMenu--link-container__icon" src={deleteIcon} alt="" />
                  <Link className="popOverMenu--link-container__link" to="/delete">Delete</Link>
                </div>
              </div>
            }
          >
            <div className="App-project--menu" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
              <div className="App-project--menu__icon">
                <img src={menuIcon} alt="Menu icon" />
              </div>
            </div>
          </Popover>;

        </div>
        {/* Project #1 End */}
        {/* Project #2 */}
        <div className="App-project">
          {/* Project details section */}
          <div className="App-project--details">
            <div className="App-project--details__name">
              E-Commerce Shop
          </div>
            <div className="App-project--details__creation-date">
              Creation date:  09/09/2020 10:30 am
          </div>
          </div>
          {/* Project user section */}
          <div className="App-project--user">
            <div className="App-project--user__image">
              <img src={image} alt="Project user name"></img>
            </div>
            <div className="App-project--user__name">
              Ignacio Truffa
          </div>
          </div>
          {/* Project menu icon */}
          <div className="App-project--menu">
            <div className="App-project--menu__icon">
              <img src={menuIcon} alt="Menu icon" />
            </div>
          </div>
        </div>
        {/* Project #2 End */}
        {/* Project #3 */}
        <div className="App-project">
          {/* Project details section */}
          <div className="App-project--details">
            <div className="App-project--details__name">
              CRM Linkroom
          </div>
            <div className="App-project--details__creation-date">
              Creation date:  09/09/2020 10:30 am
          </div>
          </div>
          {/* Project user section */}
          <div className="App-project--user">
            <div className="App-project--user__image">
              <img src={image} alt="Project user name"></img>
            </div>
            <div className="App-project--user__name">
              Ignacio Truffa
          </div>
          </div>
          {/* Project menu icon */}
          <div className="App-project--menu">
            <div className="App-project--menu__icon">
              <img src={menuIcon} alt="Menu icon" />
            </div>
          </div>
        </div>
        {/* Project #3 End */}
      </div>
    </div>
  );
}

export default Projects;