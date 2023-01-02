// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const Greeting = ({initialName = ''}) => {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState(initialName)
  

  function handleChangeName(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChangeName} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Kody"/>
}

export default App
