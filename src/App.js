import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Users from './components/Users'
import formSchema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';

// Initialize Intial Empty Form State
const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: {
    read: false,
  }
}

// Intialize Form Error Initial State
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}

// Initialize Empty User Array to store users from get request
const initialUsers = [];
// Initialize variable to toggle active/inactive buttons/fields
const initialDisabled = true;


function App() {
  //DECLARE USE STATES
  const [users, setUsers] = useState(initialUsers) //track states of user objects
  const [formValues, setFormValues] = useState(initialFormValues) // tracks state of values from onload to submit
  const [formErrors, setFormErrors] = useState(initialFormErrors) // holds state for form errors
  const [disabled, setDisabled] = useState(initialDisabled) // track state of disabled status on inputs and buttons
  
  //API HELPER FUNCTIONS
  // <]====<< GET REQUEST
  const getUsers = () => {
    axios.get('https://reqres.in/api/users').then(res => {
      setUsers(res.data.data)
      console.log(res.data.data); //print response back
    })
    .catch(err =>{
      console.log('This is a GET error' + err);
    })
  }
  // >>====[> POST REQUEST
const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers([res.data, ...users])
    setFormValues(initialFormValues)
    console.log(res.data)
  })
  .catch(err => {
    console.log('This is a POST error:' + err)
  })
}
 
//FORM ACTIONS
const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })
  setFormValues({
    ...formValues,
    [name]: value // NOT AN ARRAY
  })
}

const checkboxChange = (name, isChecked) => {
  setFormValues({
      ...formValues,
      terms: {
        [name]: isChecked 
      }
    })
}

const submit = () => {
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    tOs: Object.keys(formValues.terms),
  }
  postNewUser(newUser) 
}

useEffect(() => {
  getUsers()
}, [])

useEffect(() => {
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])

  return (
    <div className="App">
      <header className="App-header"> User Management Dashboard</header>
      <div>
        <Form 
        values = { formValues }
        inputChange = { inputChange }
        checkboxChange = { checkboxChange }
        submit = { submit }
        disabled = { disabled }
        errors = { formErrors }
        />
      </div>
      {
        users.map(user => {
          return(
            <Users key={ user.id } details={ user } />
          )
        })
      }
    </div>
  );
}

export default App;
