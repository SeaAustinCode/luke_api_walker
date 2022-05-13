import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import Error from './Error';

const Planets = (props) => {

  const { input } = useParams()

  const [responseData, setResponseData] = useState("");

  const [errorResponse, setErrorResponse] = useState(false)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${input}`)
      // .then(response => response.json())
      .then(response => {
        setResponseData(response.data);
      })
      .catch(error => {
        console.log(error)
        setErrorResponse(true)
      });
  }, [input]); //second option input, retriggers useEffect 


  console.log(errorResponse);

  { JSON.stringify(responseData) };
  // {JSON.stringify(people)};
  // {JSON.stringify(response.data)};

  if (errorResponse === true) {
    <Error />
  } else {
    return (
      <div>
        <h1>{responseData.name}</h1>
        <h3>Climate: {responseData.climate}</h3>
        <h3>Terrain: {responseData.terrain}</h3>
        <h3>Surface Water: {responseData.surface_water}</h3>
        <h3>Population: {responseData.population}</h3>
      </div>
    )
  }
}
export default Planets