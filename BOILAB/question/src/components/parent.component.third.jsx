


import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [title, setTitle] = useState("Fruits List");
  const [items, setItems] = useState(["Apple", "Banana", "Mango", "Orange"]);

  return (
    <div>
      <h1>Parent Component</h1>

      <ChildComponent title={title} items={items} />
    </div>
  );
};

export default ParentComponent;  


// import React from "react";

// const ChildComponent = ({ title, items }) => {
//   return (
//     <div>
//       <h2>{title}</h2>

//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ChildComponent;
// ```

// ---

// # App.jsx

// ```jsx
// import React from "react";
// import ParentComponent from "./ParentComponent";

// const App = () => {
//   return (
//     <div>
//       <ParentComponent />
//     </div>
//   );
// };

// export default App;
// ```

// ### Explanation:

// * `useState` is used in the parent component to store the title and items.
// * The parent passes `title` and `items` to the child component using props.
// * The child component receives the props and displays them.
// * `map()` is used to display all items in the array.
