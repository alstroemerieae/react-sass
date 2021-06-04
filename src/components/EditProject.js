import Header from '../components/Header';
import Subheader from '../components/Subheader';
import ModifyProject from './ModifyProject';

const AddProject = () => {
  return (
    <div className="App">
      <Header/>
      <Subheader title="Edit project"/>
      <ModifyProject/>
    </div>
  );
}

export default AddProject;