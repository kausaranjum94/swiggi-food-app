import React from 'react';
import Header from './Header';
import { useRouteError } from 'react-router';

function Error() {
    const error = useRouteError();
    console.log(error);
  return (
    
    <div>
      <Header />
      <h1>{error.message}</h1>
    </div>
  )
}

export default Error
