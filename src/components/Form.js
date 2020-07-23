import React from 'react'


function Form(props) {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props
    

    //pulling functions into Form via props
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onCheckboxChange = event => {
        const { name, checked } = event.target
        checkboxChange(name, checked)
    }

    const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }


    return(
        <div>
            <h1>Add New User Information</h1>
            <form className="form-container" onSubmit={onSubmit}>
                <div className="form-inputs">
                    <h4> General Information </h4>
                <label htmlFor="first_name">First Name:&nbsp;
                    <input
                        value= { values.first_name }
                        onChange= { onInputChange }
                        name="first_name"
                        type="string">
                    </input>
                </label>
                <label htmlFor="last_name">Last Name:&nbsp;
                    <input
                        value= { values.last_name }
                        onChange= { onInputChange }
                        name="last_name"
                        type="string">
                    </input>
                </label>
                <br />
                <label htmlFor="email">Email:&nbsp;
                    <input
                        value= { values.email }
                        onChange= { onInputChange }
                        name="email"
                        type="string">
                    </input>
                </label>
                <label htmlFor="password">Password:&nbsp;
                    <input
                        value= { values.password }
                        onChange= { onInputChange }
                        name="password"
                        type="string">
                    </input>
                </label>
                <br />
                <label htmlFor="terms"><a href="https://policies.google.com/terms?hl=en-US">Accept Terms of Serivce</a>
                 <input
                   type="checkbox"
                   name='terms'
                   checked={values.terms.terms === true}
                   onChange={onCheckboxChange}
                 />
                </label>
                </div>
                <div className="form-submit">
                    <button disabled={disabled}>Add New User</button>
                    <div className="errors">
                        <div>{ errors.first_name }</div>
                        <div>{ errors.last_name }</div>
                    </div> 
                </div>
            </form>
        </div>

    )
}

export default Form;