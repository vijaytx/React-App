import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {

    const [people, setPeople] = useState([
      { id: 1, name: 'Vijay', age: 30, checked: false },
      { id: 2, name: 'Sindhu', age: 30, checked: false },
      { id: 3, name: 'Vidhuran', age: 4, checked: false }
    ]);

    const handleCheckBox = (id) => {
        const peopleList = people.map((person)=> person.id === id ? {...person, checked: !person.checked} : person);
        setPeople(peopleList);
        localStorage.setItem('peopleList', JSON.stringify(peopleList));
        console.table(people);
    }

    const handleDelete = (id) => {
        const peopleList = people.filter((person)=> person.id != id);
        setPeople(peopleList);
        localStorage.setItem('peopleList', JSON.stringify(peopleList));
        console.table(people);
    }
      
  return (
    <main>
      {people.length ? (
        <ul>
            {people.map((person)=> (
                <li className="item" key={person.id}>
                    <input 
                      type="checkbox"
                      checked={person.checked}
                      onChange={()=>handleCheckBox(person.id)}
                    />
                    <label 
                      style={(person.checked) ? {textDecoration: 'line-through'} : null}
                      onDoubleClick={()=>handleCheckBox(person.id)}
                    > 
                      {person.name} : {person.age}
                    </label>
                    <FaTrashAlt 
                      role="button"
                      tabIndex="0"
                      onClick={()=>handleDelete(person.id)}
                    />
                </li>
            ))}
        </ul>
      ) : (
        <p style={{marginTop: '2rem'}}>The list is empty</p>
      )}
    </main>
  )
}

export default Content
