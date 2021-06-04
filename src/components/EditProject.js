import Header from '../components/Header';
import Subheader from '../components/Subheader';
import ModifyProject from './ModifyProject';
import backArrowItem from '../assets/backArrowIcon.svg'

const AddProject = () => {
  return (
    <div className="App">
      <Header/>
      <Subheader icon={backArrowItem} iconDescription={"Back"} title="Edit project"/>
      <ModifyProject/>
    </div>
  );
}

export default AddProject;