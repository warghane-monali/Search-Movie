import React, { useContext } from 'react';
import { AppContext } from './context'

function Home() {
    const name = useContext( AppContext);
  return (
    <>
      <div>My Home</div>
      <p>{name}</p>
    </>
  )
}

export default Home
