import React from 'react';

import Person from './Person/Person'; 

const Persons = (props) => props.persons.map((item, index) => {
            return <Person
                    key={item.id}
                    click={() => { props.clicked(index) }}
                    name={item.name}
                    age={item.age}
                    nameChange={(event) => props.changed(event, item.id) } />
});

export default Persons;