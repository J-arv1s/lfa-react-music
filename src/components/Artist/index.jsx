import React from 'react'
import { useState } from 'react'

import PropTypes from 'prop-types'

const Artist = (props) => {

    const [ isFlipped, setIsFlipped ] = useState(false)
    const handleFlipped = () => {
      setIsFlipped(!isFlipped)
    }

    return (
        <>
            <div className='card-outline'>
                <div onClick={handleFlipped} className={`card ${isFlipped ? 'is-flipped':''}`}>
                    <div className='front'>
                        <img src={props.bandLogo} alt='Band logo' aria-label={`Artist logo for ${props.name}`} className='artist-logo'/>
                    </div>
                    <div className='back'>
                        <h2 className='artist-name'>Artist: {props.name}</h2>
                        <h3 className='artist-genre'>Music Genre: {props.genre}</h3>
                        <p className='artist-text'> Bio: {props.text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

Artist.propTypes = {
    name: PropTypes.string,
    genre: PropTypes.string,
    text: PropTypes.string,
    bandLogo: PropTypes.string
}
Artist.defaultProps = {
    name: 'Anonymous',
    genre: 'Un-disclosed',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \
    Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
}

export default Artist