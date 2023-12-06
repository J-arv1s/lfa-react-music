import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation()
    const navigate = useNavigate()

  return (
    <div>
        <h1>Page <span style={{color: 'firebrick'}}>{location.pathname} </span>
            not found</h1>
        <button onClick={() => navigate('/')}>Go back &rarr;</button>
    </div>
  )
}

export default NotFound