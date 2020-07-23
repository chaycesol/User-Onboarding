import React from 'react'


function Users( { details } ) {

    if(!details) {
        return <h2>Working on retrieving data...</h2>
    }

    return(
        <div className='user-card'>
            <h2> { details.first_name } { details.last_name }</h2>
            <ul><h4>User Information</h4>
                <li>User ID: { details.id}</li>
                <li>Email: { details.email}</li>
                <li>Avatar: <span> <a href={details.avatar}>Link</a></span>{ details.terms}</li>
                <li>Accepted Terms: { details.terms} </li>
            </ul>
        </div>
        
    )
}

export default Users;