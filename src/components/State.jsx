import React, { useState } from 'react'

const State = () => {
    const [name, setName] = useState('Mr Nzube')
    const [now, setNow] = useState('one wife')
    const [nok, setKids] = useState('two kids')

    const coronation = () => {
        setName('Maazi Nzube')
        setNow('four wivies')
        setKids('sixeen kids')

    }
  return (
    <div>
      <h1>Mr Name is {name}, I have {now} and {nok}.</h1>
      <button onClick={coronation}>Coronation</button>
    </div>
  )
}

export default State
