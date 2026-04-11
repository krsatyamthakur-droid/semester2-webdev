import React, {useEffect } from 'react'

const ArrayComponents = () => {
    const [search, setSearch] =useState("");
    const names=["Alice", "Bob", "Charlie", "David"];
    const filteredNames=names.filter(name=>name.toLowerCase().includes(search.toLowerCase()));


    return (
    <div>
      <input type="text"
      value={search}
      placeholder='search a name'
      onChange={e=>setSearch(e.target.value)}
      />
      <ul>
        {filteredNames.map(name=>(
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArrayComponents
