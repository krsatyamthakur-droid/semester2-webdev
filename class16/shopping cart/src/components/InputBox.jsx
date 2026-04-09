import React, { useState } from "react";

const InputBox = () => {
  const [InputText, setInputText] = useState("");
  const [first, Setfirst] = useState("")
  const handlechange = (e) => {
    // console.log(e.target.value);
  };
  const handleclick = () => {
    alert(inputText);
    //setInputText("");
  };

  return (
    <>
      <h2 className="bg-amber-600">Input Box</h2>
      <input className="border-solid bg-purple-500 gap-1.5 mt-2 ml-3"
        type="text"
        placeholder="type"
        value={InputText}
        onChange={(e) => setInputText(e.target.value)}
      ></input>
       <input className="border-solid bg-purple-500 gap-1.5 mt-2 ml-3"
        type="text"
        placeholder="type"
        value={Setfirst}
        onChange={(a) => Setfirst(a.target.value)}
      ></input>
      <button className="bg-pink-400 ml-1.5  " onClick={handleclick}>click</button>
    </>
  );
};

export default InputBox;
