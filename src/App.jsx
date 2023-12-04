
import React from 'react'
import { useState } from 'react'

import bandLogo from './assets/arcticmonkey.png'

import Artist from './Artist.jsx'
import Songs from './Songs.jsx'

export default function App() {
  return (
    <>
      <h1>Music App</h1>
      <Artist bandLogo={bandLogo} name="ARCTIC MONKEYS" genre="Rock" text="With their nervy and literate indie rock sound, Arctic Monkeys 
                            arrived with a blast in 2005. Assisted by rave reviews and online 
                            word of mouth, they quickly became a sensation in the 
                            United Kingdom, where they were seen as the heir apparent to 
                            the throne left vacant by Oasis and the Libertines."/>
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