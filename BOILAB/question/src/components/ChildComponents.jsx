import { div } from 'framer-motion/client'
import React from 'react'

const ChildComponents = ({temp}) => {
    const temperature=({temp})=>{
        if(temp===""){
            return <div>Please enter a temperature.</div>
        }
        if(isNaN(temp)){
            return <div>Please enter a valid number.</div>

        }
    }
  return (
    <div>
       ChildComponents {temp}
       {temperature({temp})}
    </div>
  )
}

export default ChildComponents
