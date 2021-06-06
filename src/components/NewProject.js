import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const NewProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  // I'm not sure what kind of validation you guys wanted, so I simply validated that the fields were not empty.
  function validateField(value) {
    let error;
    if (value === '') {
      error = 'Empty field not allowed';
    }
    return error;
  }

  return (
    <div className="App-project">
      <Formik
        initialValues={{
          projectname: '',
          projectdescription: '',
          projectdate: 'Creation date:  09/09/2020 10:30 am',
          projectmanager: '',
          projectdeveloper: '',
          projectstatus: 'enabled',
        }}
        onSubmit={values => {
          let newValues = values;
          setIsLoading(true);
          console.log("Creating new project...")
          // fetch('http://localhost:8000/projects', {
          fetch('https://react-sass-server.herokuapp.com/projects', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newValues)
          })
          .then(() => {
            setIsLoading(false)
            history.push("/")
          })
        }}
      >
        {({ errors, touched }) => (
          <Form className="App-project--form">
            {/* Project name */}
            <label className="App-project--form__label" htmlFor="projectname">
              <p>Project Name</p>
              {errors.projectname && touched.projectname && <div className="App-project--form__error-message">{errors.projectname}</div>}
            </label>
            <Field className="App-project--form__input" name="projectname" validate={validateField} />
            {/* Project description */}
            <label className="App-project--form__label" htmlFor="projectdescription">
              <p>Description</p>
              {errors.projectdescription && touched.projectdescription && <div className="App-project--form__error-message">{errors.projectdescription}</div>}
            </label>
            <Field className="App-project--form__input" name="projectdescription" validate={validateField} />
            {/* Project manager */}
            <label className="App-project--form__label" htmlFor="projectmanager">
              <p>Project manager</p>
              {errors.projectmanager && touched.projectmanager && <div className="App-project--form__error-message">{errors.projectmanager}</div>}
            </label>
            <Field className="App-project--form__input" as="select" name="projectmanager" validate={validateField}>
              <option value="xxxxxx">Select a person</option>
              <option value="Walt Cosani">Walt Cosani</option>
              <option value="Ignacio Truffa">Ignacio Truffa</option>
            </Field>
            {/* Project developer */}
            <label className="App-project--form__label" htmlFor="projectdeveloper">
              <p>Assigned to</p>
              {errors.projectdeveloper && touched.projectdeveloper && <div className="App-project--form__error-message">{errors.projectdeveloper}</div>}
            </label>
            <Field className="App-project--form__input" as="select" name="projectdeveloper" validate={validateField}>
              <option value="xxxxxx">Select a person</option>
              <option value="Walt Cosani">Walt Cosani</option>
              <option value="Ignacio Truffa">Ignacio Truffa</option>
            </Field>
            {/* Project status */}
            <label className="App-project--form__label" htmlFor="projectstatus">
              <p>Status</p>
              {/* There's no need to use a validator here because the default option ("enabled") will be populated from the start */}
            </label>
            <Field className="App-project--form__input" as="select" name="projectstatus">
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </Field>
            {/* Submit button */}
            { !isLoading && <button className="Button-Big" type="submit">Create project</button>}
            { isLoading && <button className="Button-Big">Creating project...</button>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewProject;