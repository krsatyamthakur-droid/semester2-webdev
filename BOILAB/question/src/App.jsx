import React, { useEffect } from 'react'
import Temperature from './temperature.jsx';
import ChildComponents from './components/ChildComponents.jsx';
import ParentComponents from './components/ParentComponents.jsx';
const App = () => {

  return (
    <div>
      {/* <Temperature /> */}
      <ChildComponents />
      <ParentComponents />
    </div>
  )
}

export default App;

