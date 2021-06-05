import backArrowItem from '../assets/backArrowIcon.svg';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import NewProject from './NewProject';

const AddProject = () => {
  return (
    <div className="App">
      <Header />
      <Subheader icon={backArrowItem} iconDescription={"Back"} title="Add project" />
      <NewProject />
    </div>
  );
}

export default AddProject;