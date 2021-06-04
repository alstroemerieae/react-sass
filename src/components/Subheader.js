const Subheader = ({icon, iconDescription, title, buttonText}) => {
  return (
    <div className="App-subheader">
      { icon &&
        <div className="App-subheader--icon-container">
          <img className="App-subheader--icon-container__icon" src={icon} alt="3"/>
          <p className="App-subheader--icon-container__icon-description">{iconDescription}</p>
        </div> 
      }
      <p className="App-subheader-title">{title}</p>
      { buttonText && <button className="Button">{buttonText}</button>}
    </div>
  );
}

export default Subheader;