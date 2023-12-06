import React from 'react'
import { useState } from 'react'

import bandLogo from '../../assets/arcticmonkey.png'

const Artist = () => {

    const [ isFlipped, setIsFlipped ] = useState(false)
    const handleFlipped = () => {
      setIsFlipped(!isFlipped)
    }

    return (
        <>
            <div className='card-outline'>
                <div onClick={handleFlipped} className={`card ${isFlipped ? 'is-flipped':''}`}>
                    <div className='front'>
                        <img src={bandLogo} alt='Band logo' aria-label={`Artist logo for ARCTIC MONKEYS`} className='artist-logo'/>
                    </div>
                    <div className='back'>
                        <h2 className='artist-name'>Artist: ARCTIC MONKEYS</h2>
                        <h3 className='artist-genre'>Music Genre: Rock</h3>
                        <p className='artist-text'> Bio: With their nervy and literate indie rock sound, Arctic Monkeys 
                            arrived with a blast in 2005. Assisted by rave reviews and online 
                            word of mouth, they quickly became a sensation in the 
                            United Kingdom, where they were seen as the heir apparent to 
                            the throne left vacant by Oasis and the Libertines.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artist