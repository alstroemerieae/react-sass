import backArrowItem from '../assets/backArrowIcon.svg';
import Header from '../components/Header';
import Subheader from '../components/Subheader';
import ModifyProject from './ModifyProject';

const AddProject = () => {
  return (
    <div className="App">
      <Header />
      <Subheader icon={backArrowItem} iconDescription={"Back"} title="Edit project" />
      <ModifyProject />
    </div>
  );
}

export default AddProject;