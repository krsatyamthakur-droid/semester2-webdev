import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h1 style={{color:"white"}}>{props.name}{props.age}</h1>
    </div>
  )
}

export default Card
