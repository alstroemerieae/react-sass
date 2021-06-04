const Subheader = ({title}) => {
  return (
    <div className="App-subheader">
      <p className="App-subheader-title">{title}</p>
      <button className="Button">Add project</button>
    </div>
  );
}

export default Subheader;