// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName

  const useLocalStorageState = (key, defaulValue = '') => {
    const [state, setState] = React.useState(() => 
    window.localStorage.getItem(key) ?? defaulValue,
    )
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name) 
  
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])
  
  return [state, setState]
  }

  const Greeting = ({initialName = ''}) => {
    const [name, setName] = useLocalStorageState('name', initialName) 
  function handleChange(event) {
    setName(event.target.value)
  }

  return ( 
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
