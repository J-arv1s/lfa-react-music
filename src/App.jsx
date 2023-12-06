// rafce
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { NavBar } from './layout'
import * as Pages from './pages'

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
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path='/fav-band' element={<Pages.FavBand />} />
          <Route path='/fav-songs' element={<Pages.FavSongs />} />
        </Route>

        <Route path='*' element={<Pages.NotFound />} />
      </Routes>

      {/* <h2>ID 1 - 6</h2>
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
      </form> */}
    </>
  )
}

export default App