import React, { useEffect } from 'react'

const ParentComponents = () => {
    const [temp,setTemp]=React.useState(0);
    const changeTemp=(e)=>{
        const value=e.target.value;
        setTemp(value==" "? "":Number(value));
    }
  return (
    <div>
        <h1>ParentComponents</h1>
        <ChildComponents temp={temp} />
        <input type="text"  value={temp} onChange={changeTemp}/>

    </div>
  )
}

export default ParentComponents
