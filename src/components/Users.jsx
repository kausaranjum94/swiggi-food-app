import React from 'react';
const Users = (props) => {
   const {name, email, designation} = props
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <p>{designation}</p>
    </div>
  )
}

export default Users
