import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from './Error';


// NOT DRY CODE === WAS UNSURE HOW TO INCLUDE PLANETS AND PEOPLE IN THE SAME COMPONENT AND USE A VARIABLE TO SWITCH BETWEEN THE TWO 

const People = (props) => {

    const { input } = useParams()

    const [responseData, setResponseData] = useState({}); // empty 

    const [errorResponse, setErrorResponse] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${input}`)
            // .then(response => response.json())
            .then(response => {
                console.log(response.data)
                setResponseData(response.data);
            })
            .catch(error => {
                console.log(error)
                // setErrorResponse(true)
                navigate("/error") //matches the route in app.js and renders the element <Error />
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
                {/* <h2>{responseData.homeworld.${name}}</h2> */}
                <h3>Height: {responseData.height}</h3>
                <h3>Mass: {responseData.mass}</h3>
                <h3>Hair Color: {responseData.hair_color}</h3>
                <h3>Skin Color: {responseData.skin_color}</h3>
            </div>
        )
    }
}

export default People