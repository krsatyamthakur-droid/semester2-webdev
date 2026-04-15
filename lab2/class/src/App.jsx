
// import React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0)
//   function increaseNum(){
//     setNum(num + 1)
//   }
//   function decreaseNum(){
//     setNum(num - 1)
//     }
//     function resetNum(){
//       setNum(0);
//     }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increaseNum}>Increase</button>
//       <button onClick={decreaseNum}>Decrease</button>
//       <button onClick={resetNum}>Reset</button>
//     </div>
//   )
// }

// export default App


import React, { use, useEffect, useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false)
   useEffect(()=>{
   alert('component Mounted')

   return () => {
     alert('component unmounted')
   }

  },[show])
  function Hide(){
    setShow(false)
  }
  function Show(){
    setShow(true)
  }
  return (
    <div>
     <button onClick={Hide}>Hide</button>
     <button onClick={Show}>Show</button>
     {show && <p>hello james  </p>}
    </div>
  )
}

export default App
