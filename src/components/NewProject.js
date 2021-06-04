import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useState } from "react";

const NewProject = () => {
  const [projectname, setProjectName] = useState('');
  const [projectdescription, setProjectDescription] = useState('');
  const [projectdate] = useState('Creation date:  09/09/2020 10:30 am');
  const [projectmanager, setProjectManager] = useState('');
  const [projectdeveloper, setProjectDeverloper] = useState('');
  const [projectstatus, setProjectStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { projectname, projectdescription, projectdate, projectmanager, projectdeveloper, projectstatus };
    setIsLoading(true);
    console.log("Creating project...");

    fetch('http://localhost:8000/projects', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(project)
    })
  }

  return (
    <div className="App-project">
      <Formik>
        <Form className="App-project--form" onSubmit={handleSubmit}>
          <label className="App-project--form__label" htmlFor="projectName">Project Name</label>
          <Field className="App-project--form__input" id="projectName" name="projectName" onChange={(e) => setProjectName(e.target.value)}/>

          <label className="App-project--form__label" htmlFor="projectDescription">Description</label>
          <Field className="App-project--form__input" id="projectDescription" name="projectDescription" onChange={(e) => setProjectDescription(e.target.value)}/>

          <label className="App-project--form__label" htmlFor="projectManager">Project manager</label>
          <Field className="App-project--form__input" as="select" name="projectManager" onChange={(e) => setProjectManager(e.target.value)}>
            <option value="xxxxxx">Select a person</option>
            <option value="Walt Cosani">Walt Cosani</option>
            <option value="Ignacio Truffa">Ignacio Truffa</option>
          </Field>

          <label className="App-project--form__label" htmlFor="projectDeveloper">Assigned to</label>
          <Field className="App-project--form__input" as="select" name="projectDeveloper" onChange={(e) => setProjectDeverloper(e.target.value)}>
            <option value="xxxxxx">Select a person</option>
            <option value="Walt Cosani">Walt Cosani</option>
            <option value="Ignacio Truffa">Ignacio Truffa</option>
          </Field>

          <label className="App-project--form__label" htmlFor="projectStatus">Status</label>
          <Field className="App-project--form__input" as="select" name="projectStatus" onChange={(e) => setProjectStatus(e.target.value)}>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Field>

          { !isLoading && <button className="Button-Big" type="submit">Create project</button> }
          { isLoading && <button className="Button-Big">Creating project...</button> }
        </Form>
      </Formik>
    </div>
  );
}

export default NewProject;