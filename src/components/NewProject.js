import React from 'react';
import { Formik, Field, Form } from 'formik';

const NewProject = () => {
  return (
    <div className="App-new-project">
      <Formik
      initialValues={{
        projectName: '',
        projectDescription: '',
        projectManager: '',
        projectDeveloper: '',
        projectStatus: 'enabled'
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      >
        <Form className="App-new-project--form">
          <label className="App-new-project--form__label" htmlFor="projectName">Project Name</label>
          <Field className="App-new-project--form__input" id="projectName" name="projectName"/>

          <label className="App-new-project--form__label" htmlFor="projectDescription">Description</label>
          <Field className="App-new-project--form__input" id="projectDescription" name="projectDescription"/>

          <label className="App-new-project--form__label" htmlFor="projectManager">Project manager</label>
          <Field className="App-new-project--form__input" as="select" name="projectManager">
            <option value="xxxxxx">Select a person</option>
            <option value="Walt Cosani">Walt Cosani</option>
            <option value="Ignacio Truffa">Ignacio Truffa</option>
          </Field>

          <label className="App-new-project--form__label" htmlFor="projectDeveloper">Assigned to</label>
          <Field className="App-new-project--form__input" as="select" name="projectDeveloper">
            <option value="xxxxxx">Select a person</option>
            <option value="Walt Cosani">Walt Cosani</option>
            <option value="Ignacio Truffa">Ignacio Truffa</option>
          </Field>

          <label className="App-new-project--form__label" htmlFor="projectStatus">Status</label>
          <Field className="App-new-project--form__input" as="select" name="projectStatus">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Field>

          <button className="Button-Big" type="submit">Create project</button>
        </Form>
      </Formik>
    </div>
  );
}

export default NewProject;