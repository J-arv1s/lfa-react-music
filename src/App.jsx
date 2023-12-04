
import React from 'react'
import { useState } from 'react'

import bandLogo from './assets/arcticmonkey.png'

import Artist from './Artist.jsx'
import Songs from './Songs.jsx'

export default function App() {
  
  const [ rangeInput, setRangeInput ] = useState()
  const [ range, setRangeSubmit ] = useState()
  
  const handleInput = (e) => {
    setRangeInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setRangeSubmit(rangeInput)
    setRangeInput('')
  }

  return (
    <>
      <h1>Music App</h1>
      <h2>Favourite Band/Artist/Music Thing</h2>
      <Artist bandLogo={bandLogo} name="ARCTIC MONKEYS" genre="Rock" text="With their nervy and literate indie rock sound, Arctic Monkeys 
                            arrived with a blast in 2005. Assisted by rave reviews and online 
                            word of mouth, they quickly became a sensation in the 
                            United Kingdom, where they were seen as the heir apparent to 
                            the throne left vacant by Oasis and the Libertines."/>
      <h2>ID 1 - 6</h2>
      <p>Number: {range}</p>
      <form>
        <input 
          type="text"
          value={rangeInput}
          onChange={handleInput}
        />
        <button
          type='submit'
          onClick={handleSubmit}
        >Find</button>
      </form>
      <h2>Some of there Songs which i like</h2>
      <Songs />
    </>
  )
}

// const [count, setCount] = useState(0)
{/* <button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.jsx</code> and save to test HMR
</p> */}