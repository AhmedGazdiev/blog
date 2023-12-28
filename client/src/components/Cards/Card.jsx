import React from 'react'

const Card = ({type,children}) => {
  return (
    <div className={`card ${type || ''}`}>{children}</div>
  )
}

export default Card