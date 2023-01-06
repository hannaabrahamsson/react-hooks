// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const Name = () => {
  const [name, setName] = React.useState('')
   
  const handleOnNameChange = (event) => {
    setName(event.target.value)
  }
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={handleOnNameChange} />
      <div>{`Hi ${name}!`}</div>
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
const FavoriteAnimal = ({animal, onAnimalChange}) => {
  // 💣 delete this, it's now managed by the App
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

// 🐨 uncomment this
const Display = ({animal}) => {
  return <div>{`Your favorite animal is: ${animal}!`}</div>
}

// 💣 remove this component in favor of the new one
// function Display({name}) {
//   return <div>{`Hey ${name}, you are great!`}</div>
// }

const App = () => {
  // 🐨 add a useState for the animal
  const [animal, setAnimal] = React.useState('')

  const handleOnAnimalChange = (event) => {
    setAnimal(event.target.value)
  }

  return (
    <form>
      <Name />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal 
        animal={animal}
        onAnimalChange={handleOnAnimalChange}
      />
      {/* 🐨 pass the animal prop here */}

      <Display  
        animal={animal}
      />
    </form>
  )
}

export default App
