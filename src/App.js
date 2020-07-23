import React from 'react';
import Form from './components/Form';
import formSchema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';

// Initialize Intial Empty Form State



function App() {
  return (
    <div className="App">
      <header className="App-header"> User Management Dashboard</header>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
