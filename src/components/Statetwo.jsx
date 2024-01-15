import React, { useState } from 'react'

const Statetwo = () => {
    const [name, setName] = useState('Daniel')
    const [njn, setNjn] = useState('front end devloper')
    const [nim, setNim] = useState('sport betting')

    const rehab = () => {
        setName('Eng Daniel')
        setNjn('Data scientist')
        setNim('Coding')
    }

  return (
    <div>
      <h1>My name is {name}, I an a {njn}, I am addicted to {nim}</h1>
      <button onClick={rehab}>rehab</button>
    </div>
  )
}

export default Statetwo
