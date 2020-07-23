import React from 'react'


function Form() {
    
    return(
        <div>
            <h1>This is the Form</h1>
            <form>
                <label htmlFor="first_name">First Name:&nbsp;
                    <input
                        name="first_name"
                        type="text">
                    </input>
                </label>
            </form>
        </div>

    )
}

export default Form;