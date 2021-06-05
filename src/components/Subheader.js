import { Link } from "react-router-dom";

const Subheader = ({ icon, iconDescription, title, buttonText }) => {
  return (
    <div className="App-subheader">
      { icon &&
        <Link to={`/`} className="App-subheader--icon-container">
          <img className="App-subheader--icon-container__icon" src={icon} alt="3" />
          <p className="App-subheader--icon-container__icon-description">{iconDescription}</p>
        </Link>
      }
      <p className="App-subheader-title">{title}</p>
      { buttonText &&
        <Link to={`/add`}>
          <button className="Button">{buttonText}</button>
        </Link>
      }
    </div>
  );
}

export default Subheader;