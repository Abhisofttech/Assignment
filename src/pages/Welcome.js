import '../index.css'
import React, { useContext } from 'react';
import { valueContext } from '../App';

const Welcome = () => {
    const { dataValue } = useContext(valueContext);
  return (
    <>
     <div className="page " >
        <h1>Welcome {dataValue.name}</h1>
     </div>
    </>
  )
}

export default Welcome
