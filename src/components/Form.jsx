import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Form = (props) => {

  const [category, setCategory] = useState("people") // entering in people/planet
  const [id, setId] = useState(1) // entering in a number 

  // using navigate to programmatically go to another ROUTE 
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // this is how we go to a route from a function
    navigate(`/${category}/${id}`);
    // navigate(`/hero/${number}`); alternate way of doing the above 
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Search for: </label>
      <select onChange={(e) => { setCategory(e.target.value) }} value={category}>
        <option value={"people"}>People</option>
        <option value={"planets"}>Planets</option>
      </select>
      <label>ID: </label>
      <input type="number" value={id} onChange={(e) => { setId(e.target.value) }}></input>
      <button type='input'>Search</button>
    </form>
  )
}

export default Form