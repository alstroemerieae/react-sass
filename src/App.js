import './sass/App.scss';
import image from './assets/Ellipse 46.png'
import vector from './assets/Vector.svg'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-subheader">
        <p className="App-subheader-title">My projects</p>
        <button className="Button">Add project</button>
      </div>
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
            <div className="App-project--menu">
              <div className="App-project--menu__icon">
                <img src={vector} alt="Menu icon" />
              </div>
            </div>
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
                <img src={vector} alt="Menu icon" />
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
                <img src={vector} alt="Menu icon" />
              </div>
            </div>
          </div>
          {/* Project #3 End */}
        </div>
        {/* ProjectList end */}
      </div>
    </div>
  );
}

export default App;