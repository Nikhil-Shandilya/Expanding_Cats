import React from 'react'
import "./card.css"

const Card = ({emoji, text}) => {
  return (
    // <div >

      <div className='card-div'>
          <h1 className='card-emoji'>{emoji}</h1>
          <h1 className='card-title'>{text}</h1>
      </div>
    // </div>
  )
}

export default Card