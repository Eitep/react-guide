import React, { useState } from 'react';
import styled from 'styled-components';

import Persons from '../components/Persons/Persons';
import './App.css';

const StyledButton = styled.button`
  background-Color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salon' : 'lightgreen'};
    color: black;
  }`


const App = () => {
  const [persons, setPersons] = useState([
    { id: "47hasduf", name: "Max", age: 28 },
    { id: "3fufsljkf", name: "John", age: 33 },
    { id: "sdfjejfd", name: "Terry", age: 20 }
  ]);

  const [showPersons, setShowPersons] = useState(false);

  //===================================================================================//

  const nameChangeHandler = (event, id) => {
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });

    console.log(personIndex);

    const person = {
      ...persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...persons];

    persons[personIndex] = person;

    setPersons(persons);
 
  }

  const deletePersonHandler = (person) => {
    const newPersons = persons.filter((currentPerson, index) => index !== person);
    console.log(newPersons);

    setPersons(newPersons);
  }

  const togglePersonHandler = () => {
    setShowPersons(!showPersons);
  }

  //===================================================================================//

  let personsComponents = null;

  if (showPersons) {
    personsComponents = (
      <div>
        <Persons
          persons = {persons}
          clicked = {deletePersonHandler}
          changed = {nameChangeHandler} />
      </div> 
    )
  }

  let classes = [];

  if (persons.length <= 2) {
    classes.push('red');
  }

  if (persons.length <= 1) {
    classes.push('bold');
  }
  //===================================================================================//

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <StyledButton
      alt={showPersons}
      onClick={togglePersonHandler} >Switch Name</StyledButton>
      {personsComponents}
    </div>
  );
}

export default App;
