import { h2 } from 'framer-motion/client'
import React from 'react'

const Temperature = ({temperature}) => {
 if(temperature === "") {
    return <div>Please enter a temperature.</div>
  }
  if(isNaN(temperature)){
    return <div>Please enter a valid number.</div>
  }

  return (
    <div>
      {temperature > 35 ? <h2>It's hot!</h2> : <h2>It's not hot.</h2>}
    </div>
  )
}

export default Temperature;
