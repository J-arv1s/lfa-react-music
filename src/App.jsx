// rafce
import React, { useState } from 'react'
import { Artist, Song } from './components'

import bandLogo from './assets/arcticmonkey.png'

import './App.css'

const App = () => {
  
  const [ messageInput, setMessage ] = useState()
  const [ message, setSubmit ] = useState()
  
  const handleInput = (e) => {
    setMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(messageInput)
    setMessage('')

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
      <p>{message}</p>
      <form>
        <input 
          type="text"
          value={messageInput}
          onChange={handleInput}
        />
        <button
          type='submit'
          onClick={handleSubmit}
        >Post</button>
      </form>
      <h2>Some of there Songs which i like</h2>
      <Song />
    </>
  )
}

export default App